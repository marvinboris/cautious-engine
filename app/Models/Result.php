<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'enrolment_id',
    ];

    public function enrolment()
    {
        return $this->belongsTo(Enrolment::class);
    }
}
