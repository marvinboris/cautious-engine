<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Course;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    private $rules = [
        'enrolment_id' => 'required|exists:enrolments,id',
        'method_id' => 'required|exists:methods,id',
        'amount' => 'required|numeric',
        'status' => 'required|integer',
        'comments' => 'nullable|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $payments = [];
        $filteredData = Payment::orderBy('id');

        $filteredData = $filteredData
            ->join('enrolments', 'enrolments.id', '=', 'payments.enrolment_id')
            ->join('methods', 'methods.id', '=', 'payments.method_id')
            ->select('payments.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('payments.amount', 'LIKE', "%$search%")
                        ->orWhere('enrolments.name', 'LIKE', "%$search%")
                        ->orWhere('method.name', 'LIKE', "%$search%")
                        ->orWhere('payments.status', 'LIKE', "%$search%")
                        ->orWhere('payments.comments', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $payment) {
            $payments[] = array_merge($payment->toArray(), [
                'enrolment' => $payment->enrolment->name,
                'method' => $payment->method->name,
            ]);
        }

        return [
            'payments' => $payments,
            'total' => $total,
        ];
    }

    public function information()
    {
        $enrolments = [];

        foreach (Course::all() as $agency) {
            $enrolments[] = array_merge($agency->toArray(), []);
        }

        return [
            'enrolments' => $enrolments,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $payments = $data['payments'];
        $total = $data['total'];

        return response()->json([
            'payments' => $payments,
            'total' => $total,
        ]);
    }

    public function info()
    {
        return response()->json($this->information());
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $payment = Payment::find($id);
        if (!$payment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['not_found'], 'danger'),
        ]);

        return response()->json([
            'payment' => $payment,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'name' => 'required|string|unique:payments',
        ]));

        $input = $request->except([]);

        Payment::create($input);

        $data = $this->data();

        $payments = $data['payments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['created'], 'success'),
            'payments' => $payments,
            'total' => $total,
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $payment = Payment::find($id);
        if (!$payment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $payment);
        $request->validate($rules);

        $input = $request->except([]);

        $payment->update($input);

        $data = $this->data();

        $payments = $data['payments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['updated'], 'success'),
            'payment' => $payment,
            'payments' => $payments,
            'total' => $total,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $payment = Payment::find($id);
        if (!$payment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['not_found'], 'danger'),
        ]);

        $payment->delete();

        $data = $this->data();

        $payments = $data['payments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['payments']['deleted'], 'success'),
            'payments' => $payments,
            'total' => $total,
        ]);
    }
}
