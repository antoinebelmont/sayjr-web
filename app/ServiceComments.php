<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ServiceComments extends Model
{
    protected $fillable = [
        'comment',
        'service_id',
        'user_id'
    ];

    protected $dates = [
        'created_at'
    ];

    public function getUserIdAttribute($val){
        return User::find($val)->name;
    }

    public function getCreatedAtAttribute($val)
    {
        return Carbon::create($val)->addHours(1)->format('d/m/Y H:i') ;
    }
}
