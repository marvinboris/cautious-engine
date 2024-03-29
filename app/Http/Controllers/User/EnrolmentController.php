<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Course;
use App\Models\Enrolment;
use Illuminate\Http\Request;

class EnrolmentController extends Controller
{
    private $rules = [
        'course_id' => 'required|exists:courses,id',
        'name' => 'required|string',
        'background' => 'required|string',
        'region' => 'required|string',
        'country' => 'required|string',
        'phone' => 'required|string',
        'email' => 'required|email',
        'passport' => 'required|string',
        'last_institute' => 'required|string',
        'recent_degree' => 'required|string',
        'degree_score' => 'required|numeric',
        'cv' => 'nullable|file',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $enrolments = [];
        $filteredData = Enrolment::orderBy('id');

        $filteredData = $filteredData
            ->join('courses', 'courses.id', '=', 'enrolments.course_id')
            ->select('enrolments.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('enrolments.name', 'LIKE', "%$search%")
                        ->orWhere('courses.name', 'LIKE', "%$search%")
                        ->orWhere('enrolments.background', 'LIKE', "%$search%")
                        ->orWhere('enrolments.region', 'LIKE', "%$search%")
                        ->orWhere('enrolments.country', 'LIKE', "%$search%")
                        ->orWhere('enrolments.phone', 'LIKE', "%$search%")
                        ->orWhere('enrolments.email', 'LIKE', "%$search%")
                        ->orWhere('enrolments.passport', 'LIKE', "%$search%")
                        ->orWhere('enrolments.last_institute', 'LIKE', "%$search%")
                        ->orWhere('enrolments.recent_degree', 'LIKE', "%$search%")
                        ->orWhere('enrolments.degree_score', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

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

        foreach ($filteredData as $enrolment) {
            $enrolments[] = array_merge($enrolment->toArray(), [
                'course' => $enrolment->course->name,
                'region' => $regions[array_search($enrolment->region, array_column($regions, 'value'))]['name'],
                'background' => $regions[array_search($enrolment->background, array_column($backgrounds, 'value'))]['name'],
            ]);
        }

        return [
            'enrolments' => $enrolments,
            'total' => $total,
        ];
    }

    public function information()
    {
        $courses = [];

        foreach (Course::all() as $agency) {
            $courses[] = array_merge($agency->toArray(), []);
        }

        return [
            'courses' => $courses,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $enrolments = $data['enrolments'];
        $total = $data['total'];

        return response()->json([
            'enrolments' => $enrolments,
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

        $enrolment = Enrolment::find($id);
        if (!$enrolment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['not_found'], 'danger'),
        ]);

        return response()->json([
            'enrolment' => $enrolment,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'name' => 'required|string|unique:enrolments',
        ]));

        $input = $request->except(['cv']);

        if ($file = $request->file('cv')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['cv'] = htmlspecialchars($fileName);
        }

        Enrolment::create($input);

        $data = $this->data();

        $enrolments = $data['enrolments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['created'], 'success'),
            'enrolments' => $enrolments,
            'total' => $total,
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $enrolment = Enrolment::find($id);
        if (!$enrolment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $enrolment);
        $request->validate($rules);

        $input = $request->except(['cv']);

        if ($file = $request->file('cv')) {
            if ($enrolment->cv && is_file(public_path($enrolment->cv))) unlink(public_path($enrolment->cv));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/enrolments', $fileName);
            $input['cv'] = htmlspecialchars($fileName);
        }

        $enrolment->update($input);

        $data = $this->data();

        $enrolments = $data['enrolments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['updated'], 'success'),
            'enrolment' => $enrolment,
            'enrolments' => $enrolments,
            'total' => $total,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $enrolment = Enrolment::find($id);
        if (!$enrolment) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['not_found'], 'danger'),
        ]);

        if ($enrolment->cv && is_file(public_path($enrolment->cv))) unlink(public_path($enrolment->cv));
        $enrolment->delete();

        $data = $this->data();

        $enrolments = $data['enrolments'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['enrolments']['deleted'], 'success'),
            'enrolments' => $enrolments,
            'total' => $total,
        ]);
    }
}
