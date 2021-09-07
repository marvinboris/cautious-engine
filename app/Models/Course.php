<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $imagesDirectory = '/images/courses/';
    protected $filesDirectory = '/files/courses/';

    protected $fillable = [
        'name', 'description', 'photo', 'requirements', 'training', 'internship', 'prizes', 'country', 'fees', 'level', 'file',
    ];

    protected $appends = [
        'enroled', 'months_training', 'months_internship',
    ];

    public function translatable($value)
    {
        $data = null;
        if (!UtilController::isJson($value)) {
            $data = [];
            foreach (Language::all() as $language) {
                $data[$language->abbr] = $value;
            }
            return $data;
        }

        return json_decode($value, true);
    }

    public function enrolments()
    {
        return $this->hasMany(Enrolment::class);
    }

    public function getNameAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getDescriptionAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getRequirementsAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getPrizesAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->imagesDirectory . $value : null;
    }

    public function getFileAttribute($value)
    {
        return $value ? $this->filesDirectory . $value : null;
    }

    public function getEnroledAttribute()
    {
        return $this->enrolments()->count();
    }

    public function getMonthsTrainingAttribute()
    {
        return round($this->training / 30);
    }

    public function getMonthsInternshipAttribute()
    {
        return round($this->internship / 30);
    }
}
