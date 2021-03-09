<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServiceMultimedia extends Model
{
    protected $fillable = [
        'service_id',
        'is_video',
        'image',
        'user_id',
        'comments'
    ];
}
