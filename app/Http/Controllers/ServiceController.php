<?php

namespace App\Http\Controllers;

use App\AccountCoverage;
use App\Insurance;
use App\Service;
use App\ServiceComments;
use App\Type;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function getCatalogs()
    {
        return response()->json(
            [
                "insurances" => Insurance::where('status', 1)->get()->toArray(),
                "types" => Type::all()->toArray(),
                "accountCoverages" => AccountCoverage::where('status', 1)->select(DB::raw('id,concat(bank," - $ ",coverage) as name'))->get(),
                "users" => User::all()->toArray(),
                'statuses' => [
                    ['id'=>'pending', 'name'=>'Pendiente'],
                    ['id'=>'appointed', 'name'=>'Agendado'],
                    ['id'=>'attended', 'name'=>'Atendido'],
                    ['id'=>'finished', 'name'=>'Terminado'],
                    ['id'=>'canceled', 'name'=>'Cancelado'],
                    ['id'=>'posponed', 'name'=>'Pospuesto'],
                ]
            ]
        );
    }

    public function createComment(Request $request){
        $data = $request->all();
        $data['user_id'] = Auth::user()->id;
        ServiceComments::create($data);
        return response()->json(['comments' => ServiceComments::where('service_id',$data['service_id'])->orderBy('id','desc')->get()]) ;
    }

    public function getComments($serviceId){
        return response()->json(['comments' => ServiceComments::where('service_id',$serviceId)->orderBy('id','desc')->get()->toArray()]) ;
    }

    public function getAccountCoverages(Request $request)
    {
        return response()->json(
            [
                "accountCoverages" => AccountCoverage::where('insurance_id', $request->insurance_id)->select(DB::raw('id,concat(bank," - $ ",coverage) as name'))->get()
            ]
        );
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "services" => $this->formatServiceList()
        ]);
    }

    public function formatServiceList()
    {
        $services = [];
        foreach (Service::all() as $service) {
            $services[] = [
                'id' => $service->id,
                'title' => $service->title,
                'client_name' => $service->client_name,
                'status' => $service->statusName,
                'first_contact_date' => $service->first_contact,
                'service_date' => $service->first_contact,
                'attendant' => $service->attendant_name,
            ];
        }
        return $services;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newService = Service::create($request->all());
        return response()->json([
            "serviceId" => $newService->id
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $service = Service::find($id);
        return response()->json([
            'service' => [
                'id' => $service->id,
                'title' => $service->title,
                'client_name' => $service->client_name,
                'service_type' => $service->service_type,
                'description' => $service->description,
                'insurance' => $service->insurance_name,
                'account' => $service->account_name,
                'address' => $service->address,
                'lat' => $service->latitude,
                'lon' => $service->longitude,
                'receptor' => $service->receptor_name,
                'attendant' => $service->attendant_name,
                'status' => $service->statusName,
                'first_contact_date' => $service->first_contact,
                'service_date' => $service->first_contact,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(['service' => Service::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}