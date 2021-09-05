<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'enrolment_id', 'method_id', 'amount', 'comments', 'status', 'data'
    ];

    public function enrolment()
    {
        return $this->belongsTo(Enrolment::class);
    }

    public function method()
    {
        return $this->belongsTo(Method::class);
    }

    public function getDataAttribute($value)
    {
        return json_decode($value);
    }
}
