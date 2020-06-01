<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'title',
        'description',
        'type_id',
        'address',
        'first_contact_date',
        'insurance_id',
        'account_coverage_id',
        'user_contact_id',
        'user_assigned_id',
        'service_date',
        'latitude',
        'longitude',
        'client_name',
        'status',
        'address_references',
        'client_phone',
        'attended_date'
    ];

    public function getFirstContactAttribute($val)
    {
        return \Carbon\Carbon::parse($this->first_contact_date)->format('d/m/Y H:i');
    }
    public function getServiceDateLabelAttribute($val)
    {
        return \Carbon\Carbon::parse($this->service_date)->format('d/m/Y H:i');
    }
    public function getAttendedDateLabelAttribute($val)
    {
        return \Carbon\Carbon::parse($this->attended_date)->format('d/m/Y H:i');
    }

    public function getStatusNameAttribute($val)
    {
        $status = '';
        switch ($this->status) {
            case 'pending':
                $status = 'Pendiente';
                break;
            case 'appointed':
                $status = 'Agendado';
                break;
            case 'attended':
                $status = 'Atendido';
                break;
            case 'finished':
                $status = 'Terminado';
                break;
            case 'canceled':
                $status = 'Cancelado';
                break;
            case 'posponed':
                $status = 'Pospuesto';
                break;
        }
        return $status;
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }
    public function getServiceTypeAttribute($val)
    {
        return $this->type->name;
    }
    public function insurance()
    {
        return $this->belongsTo(Insurance::class);
    }
    public function getInsuranceNameAttribute($val)
    {
        return $this->insurance->name;
    }
    public function account()
    {
        return $this->belongsTo(AccountCoverage::class, 'account_coverage_id');
    }
    public function getAccountNameAttribute($val)
    {
        return $this->account->bank.' $'.$this->account->coverage;
    }
    public function receptor()
    {
        return $this->belongsTo(User::class, 'user_contact_id');
    }
    public function getReceptorNameAttribute($val)
    {
        return $this->receptor->name;
    }
    public function attendant()
    {
        return $this->belongsTo(User::class, 'user_assigned_id');
    }
    public function getAttendantNameAttribute($val)
    {
        return is_object($this->attendant)?$this->attendant->name:'';
    }
}
