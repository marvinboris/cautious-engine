<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrolment extends Model
{
    use HasFactory;

    protected $directory = '/files/enrolments/';

    protected $fillable = [
        'course_id', 'region', 'background', 'name', 'address', 'birthdate', 'country', 'phone', 'email', 'passport', 'last_institute', 'recent_degree', 'degree_score',
        'writing', 'speaking', 'reading', 'comprehension', 'reason',
        'nid', 'diploma', 'photo', 'cv',
        'method_id', 'ref',
    ];

    public static function generateNewRef()
    {
        $letters = range('A', 'Z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 8; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return $code;
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function method()
    {
        return $this->belongsTo(Method::class);
    }

    public function getNidAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getDiplomaAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getCvAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
