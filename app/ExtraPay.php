<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ExtraPay extends Model
{
    protected $fillable = [
        'service_id',
        'pay_date',
        'authorized_by',
        'receiver_id',
        'comments',
        'amount',
        'created_id'
    ];

    protected $dates = [
        'created_at'
    ];

    public function getReceiverIdAttribute($val){
        return User::find($val)->name;
    }

    public function getAuthorizedByAttribute($val){
        return User::find($val)->name;
    }

    public function getCreatedIdAttribute($val){
        return User::find($val)->name;
    }

    public function getPayDateAttribute($val)
    {
        return Carbon::create($val)->format('d/m/Y H:i') ;
    }
}
