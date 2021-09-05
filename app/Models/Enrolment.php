<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrolment extends Model
{
    use HasFactory;

    protected $directory = '/files/enrolments/';

    protected $fillable = [
        'course_id', 'background', 'name', 'region', 'country', 'phone', 'email', 'address', 'cv',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function getCvAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
