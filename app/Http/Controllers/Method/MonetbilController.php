<?php

namespace App\Http\Controllers\Method;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use App\Models\Recharge;
use App\Models\Restaurant;
use App\Models\Transaction;
use App\Notifications\RestaurantRecharge;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class MonetbilController extends Controller
{
    protected static $settings;

    public function __construct()
    {
        self::$settings = [
            'vendor' => 'monetbil',
            'base_url' => 'https://api.monetbil.com/widget/v2.1/',
            'apikey' => env('MONETBIL_SERVICE_KEY'),
        ];
    }

    /**
     * Generate data necessary for the widget
     * @param Array
     * @return Array
     */
    public static function generateWidgetData($input)
    {
        $payload = [
            'status' => 'success',
            'link' => null
        ];

        $restaurant = UtilController::get(request());

        $json = [
            // 'amount' => 1,
            'amount' => round($input['amount'] * 604),
            'item_ref' => $input['amount'],
            'payment_ref' => time(),
            'country' => 'XAF',
            'logo' => asset('images/email/logo.png'),
            'email' => $restaurant->email,
            'country' => 'CM',
            'return_url' => route('monetbil.notify.get')
        ];

        $client = new Client();

        $response = $client->request('POST', self::$settings['base_url'] . self::$settings['apikey'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
        ]);

        $response = json_decode($response->getBody()->getContents());

        if (1 === +$response->success) {
            // User will be redirected to complete their payment
            $payload['link'] = $response->payment_url;
        } else {
            $payload['status'] = 'failure';
            $payload['link'] = 'Error during the process, please retry.';
        }

        return $payload;
    }

    /**
     * Get notified about the transaction
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function notify(Request $request)
    {
        $input = $request->all();
        foreach ($input as $key => $value) {
            $input[$key] = htmlspecialchars($value);
        }

        $restaurant = Restaurant::where('email', $input['email'])->first();

        if (!$restaurant) {
            error_log('No restaurant found !');
            die('No restaurant found !');
        }

        $transaction = Transaction::where("tx_id", $input['payment_ref'])->first();
        $recharge = null;

        if (!$transaction) {
            $transaction = Transaction::create([
                'amount' => round(+$request->item_ref * 604),
                'tx_id' => $input['payment_ref'],
                'tx_hash' => $input['transaction_id'],
                'vendor' => 'monetbil',
                'method' =>  $request->operator ? $input['operator'] : 'MTN',
                'type' => 'recharge',
                'status' => 'pending',
                'currency' => $request->currency ? $input['current'] : 'XAF',
                'address' => $request->phone
            ]);
            $recharge = Recharge::create([
                'restaurant_id' => $restaurant->id,
                'method_id' => Method::whereSlug('mobile')->first()->id,
                'amount' => +$request->item_ref,
                'status' => 0,
                'fees' => 0,
            ]);
            $restaurant->transactions()->save($transaction);
        }

        if ($request->currency) $transaction->currency = $input['currency'];
        if ($request->transaction_id) $transaction->tx_hash = $input['transaction_id'];

        $transaction->vendor = self::$settings['vendor'];

        if ($request->operator) $transaction->method = $input['operator'];
        if ($request->phone) $transaction->address = $input['phone'];
        if ($request->amount) $transaction->amount = round(+$request->item_ref * 604);

        if ('success' === $input['status']) {
            $recharge->update([
                'status' => 2,
            ]);
            $restaurant->notify(new RestaurantRecharge($recharge));
            $restaurant->update([
                'balance' => $restaurant->balance + $transaction->amount
            ]);
            $transaction->status = 'completed';
        } else {
            if ($recharge) $recharge->update([
                'status' => 1,
            ]);
            $transaction->status = $input['status'];
        }

        $transaction->save();

        if ('success' === $input['status'])
            return redirect('/restaurant/recharges?status=1&amount=' . $request->item_ref);

        return redirect('/restaurant/recharges');
    }
}
