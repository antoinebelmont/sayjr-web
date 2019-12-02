<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'service_id',
        'comments',
        'user_id',
        'status',
        'closing_number',
        'number'
    ];

    public function invoicer()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function getUserIdAttribute($val)
    {   
        $user = User::find($val);
        return $user->name;
    }
}
