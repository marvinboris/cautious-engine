<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Method\MonetbilController;
use App\Models\Course;
use App\Models\Enrolment;
use App\Models\Method;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function home()
    {
        $courses = Course::get();
        $methods = Method::where('slug', '!=', 'admin')->get();
        $regions = [
            ['name' => 'Center', 'value' => 'CE'],
            ['name' => 'Littoral', 'value' => 'LT'],
            ['name' => 'Adamaoua', 'value' => 'AD'],
            ['name' => 'East', 'value' => 'ES'],
            ['name' => 'Extrem North', 'value' => 'EN'],
            ['name' => 'North', 'value' => 'NO'],
            ['name' => 'North-West', 'value' => 'NW'],
            ['name' => 'West', 'value' => 'OU'],
            ['name' => 'South', 'value' => 'SU'],
            ['name' => 'South-West', 'value' => 'SW'],
        ];
        $backgrounds = [
            ['name' => 'Secondary', 'value' => 'SE'],
            ['name' => 'BAC/GCE A', 'value' => 'BA'],
            ['name' => 'BTS/HND/DSEP/DEUG', 'value' => 'BA2'],
            ['name' => 'Licence/Bachelor', 'value' => 'BA3'],
            ['name' => 'Master', 'value' => 'BA5'],
        ];

        return response()->json([
            'courses' => $courses,
            'methods' => $methods,
            'regions' => $regions,
            'backgrounds' => $backgrounds,
        ]);
    }

    public function enrolment(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'region' => 'required|string',
            'name' => 'required|string',
            'birthdate' => 'required|date',
            'code' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'passport' => 'required|string',
            'background' => 'required|string',
            'last_institute' => 'required|string',
            'recent_degree' => 'required|string',
            'degree_score' => 'required|numeric',

            'writing' => 'required|string',
            'speaking' => 'required|string',
            'reading' => 'required|string',
            'comprehension' => 'required|string',
            'reason' => 'required|string',

            'nid' => 'nullable|file',
            'photo' => 'nullable|image',
            'diploma' => 'nullable|file',
            'cv' => 'nullable|file',

            'method_id' => 'required|exists:methods,id',
            'terms' => 'required|accepted',
            'policies' => 'required|accepted',
        ]);

        $input = $request->except(['code', 'phone', 'nid', 'photo', 'diploma', 'cv', 'terms', 'policies']);

        if ($file = $request->file('nid')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['nid'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('diploma')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['diploma'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('cv')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['cv'] = htmlspecialchars($fileName);
        }

        $input['phone'] = $request->code . $request->phone;
        $input['ref'] = Enrolment::generateNewRef();

        Enrolment::create($input);

        $course = Course::find($request->course_id);

        $method = Method::find($request->method_id);
        $link = null;
        switch ($method->name) {
            case 'Mobile money':
                new MonetbilController();
                $monetbil = MonetbilController::generateWidgetData([
                    'amount' => $course->fees,
                    'ref' => $input['ref'],
                ]);
                $link = $monetbil['link'];
                break;
        }

        return response()->json([
            'link' => $link,
        ]);
    }
}
