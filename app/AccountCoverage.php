<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccountCoverage extends Model
{
    protected $fillable = ["status"];

    public function insurance(){
        return $this->belongsTo(Insurance::class);
    }

    public function getAccountAttribute($var){
        return (is_object($this->insurance))?$this->insurance->name:'';
    }

    public function getBankCoverageAttribute($var){
        return $this->bank.' - '."$ ".$this->coverage;
    }
}
