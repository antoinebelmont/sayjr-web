<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceClose extends Model
{
    protected $fillable = [
        'service_id',
        'comments',
        'user_id',
        'close_number',
        'cost'
    ];
}
