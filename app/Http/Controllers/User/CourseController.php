<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    private $rules = [
        'name' => 'required|array',
        'description' => 'required|array',
        'requirements' => 'required|array',
        'prizes' => 'required|array',
        'training' => 'required|integer',
        'internship' => 'required|integer',
        'country' => 'required|string',
        'fees' => 'required|numeric',
        'level' => 'required|integer',
        'photo' => 'nullable|image',
        'file' => 'nullable|file',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $courses = [];
        $filteredData = Course::orderBy('id');

        $filteredData = $filteredData
            ->select('courses.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('courses.name', 'LIKE', "%$search%")
                        ->orWhere('courses.description', 'LIKE', "%$search%")
                        ->orWhere('courses.requirements', 'LIKE', "%$search%")
                        ->orWhere('courses.prizes', 'LIKE', "%$search%")
                        ->orWhere('courses.training', 'LIKE', "%$search%")
                        ->orWhere('courses.internship', 'LIKE', "%$search%")
                        ->orWhere('courses.country', 'LIKE', "%$search%")
                        ->orWhere('courses.fees', 'LIKE', "%$search%")
                        ->orWhere('courses.color', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $course) {
            $courses[] = array_merge($course->toArray(), []);
        }

        return [
            'courses' => $courses,
            'total' => $total,
        ];
    }

    public function information()
    {
        $levels = [1, 2, 3, 4];

        return [
            'levels' => $levels,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $courses = $data['courses'];
        $total = $data['total'];

        return response()->json([
            'courses' => $courses,
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

        $course = Course::find($id);
        if (!$course) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['not_found'], 'danger'),
        ]);

        return response()->json([
            'course' => $course,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, []));

        $input = $request->except(['photo', 'name', 'description', 'requirements', 'prizes']);

        if ($file = $request->file('photo')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/courses', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        if ($file = $request->file('file')) {
            $fileName = time() . $file->getClientOriginalName();
            $file->move('files/courses', $fileName);
            $input['file'] = htmlspecialchars($fileName);
        }

        Course::create($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
            'requirements' => json_encode($request->requirements),
            'prizes' => json_encode($request->prizes),
        ]);

        $data = $this->data();

        $courses = $data['courses'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['created'], 'success'),
            'courses' => $courses,
            'total' => $total,
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $course = Course::find($id);
        if (!$course) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $course);
        $request->validate($rules);

        $input = $request->except(['photo', 'name', 'description', 'requirements', 'prizes']);

        if ($file = $request->file('photo')) {
            if ($course->photo && is_file(public_path($course->photo))) unlink(public_path($course->photo));
            $fileName = time() . $file->getClientOriginalName();
            $file->move('images/courses', $fileName);
            $input['photo'] = htmlspecialchars($fileName);
        }

        $course->update($input + [
            'name' => json_encode($request->name),
            'description' => json_encode($request->description),
            'requirements' => json_encode($request->requirements),
            'prizes' => json_encode($request->prizes),
        ]);

        $data = $this->data();

        $courses = $data['courses'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['updated'], 'success'),
            'course' => $course,
            'courses' => $courses,
            'total' => $total,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $course = Course::find($id);
        if (!$course) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['not_found'], 'danger'),
        ]);

        if ($course->photo && is_file(public_path($course->photo))) unlink(public_path($course->photo));
        $course->delete();

        $data = $this->data();

        $courses = $data['courses'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['courses']['deleted'], 'success'),
            'courses' => $courses,
            'total' => $total,
        ]);
    }
}
