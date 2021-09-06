<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function home()
    {
        $courses = Course::get();

        return response()->json([
            'courses' => $courses,
        ]);
    }
}
