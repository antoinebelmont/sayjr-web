<?php

namespace App\Http\Controllers;

use App\AccountCoverage;
use App\ExtraPay;
use App\Insurance;
use App\Invoice;
use App\Service;
use App\ServiceClose;
use App\ServiceComments;
use App\ServiceMultimedia;
use App\Type;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{

    public function getTRacking()
    {
        return response()->json([
            'tracking' => [
                'pending' => $this->formatServiceList(Service::where('status', 'pending')->get()),
                'appointed' => $this->formatServiceList(Service::where('status', 'appointed')->get()),
                'attended' => $this->formatServiceList(Service::where('status', 'attended')->get()),
                'forTheDay' => $this->formatServiceList(Service::where('status', 'appointed')->whereRaw('date(service_date) = date_sub(date(now()),interval 6 hour)')->get())
            ]
        ]);
    }

    public function getReport(Request $request)
    {
        $report = DB::table('base_report')->select($request->fields);
        if ($request->details == 'comments') {
            $fields = $request->fields;
            array_push($fields, 'comments.*');
            $report->select($fields);
            $report->leftJoin('comments', 'base_report.id', '=', 'comments.service_id');
        } else if ($request->details == 'extra_payments') {
            $fields = $request->fields;
            array_push($fields, 'extra_payments.*');
            $report->select($fields);
            $report->leftJoin('extra_payments', 'base_report.id', '=', 'extra_payments.service_id');
        }
        if (!empty($request->startDate) && !empty($request->finishDate)) {
            $report->whereBetween('first_contact_date', [Carbon::create($request->startDate)->format('Y-m-d H:i:s'), Carbon::create($request->finishDate)->format('Y-m-d H:i:s')]);
        }
        return response()->json(['report' => $report->get()->toArray()]);
    }
    public function getCatalogs()
    {
        return response()->json(
            [
                "insurances" => Insurance::where('status', 1)->get()->toArray(),
                "types" => Type::all()->toArray(),
                "accountCoverages" => AccountCoverage::where('status', 1)->select(DB::raw('id,concat(bank," - $ ",coverage) as name'))->get(),
                "users" => User::where('role_id', '<>', 1)->get()->toArray(),
                'statuses' => [
                    ['id' => 'pending', 'name' => 'Pendiente'],
                    ['id' => 'appointed', 'name' => 'Agendado'],
                    ['id' => 'attended', 'name' => 'Atendido'],
                    ['id' => 'to_pay', 'name' => 'Por pagar'],
                    ['id' => 'quoted', 'name' => 'Cotizado'],
                    ['id' => 'finished', 'name' => 'Terminado'],
                    ['id' => 'canceled', 'name' => 'Cancelado'],
                    ['id' => 'posponed', 'name' => 'Pospuesto'],
                    ['id' => 'invoiced','name' => 'Facturado'],
                    ['id' => 'payed','name' => 'Pagado'],
                    ['id' => 'user_cost','name' => 'Costo usuario'],
                    ['id' => 'quote_pending','name' => 'Pendiente cotización'],
                    ['id' => 'quote_sent','name' => 'Cotización informada'],
                    ['id' => 'budget_pending','name' => 'Pendiente de presupuesto'],
                    ['id' => 'cabine_close','name' => 'Cerrar con cabina'],
                    ['id' => 'warranty','name' => 'Garantía'],
                    ['id' => 'in_dispute','name' => 'En disputa'],
                ]
            ]
        );
    }

    public function createComment(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::user()->id;
        ServiceComments::create($data);
        return response()->json(['comments' => ServiceComments::where('service_id', $data['service_id'])->orderBy('id', 'desc')->get()]);
    }

    public function createPayment(Request $request)
    {
        $data = $request->all();
        $data['created_id'] = Auth::user()->id;
        $data['pay_date'] = \Carbon\Carbon::parse($data['pay_date'])->setTimezone('GMT-6');
        ExtraPay::create($data);
        return response()->json(['payments' => ExtraPay::where('service_id', $data['service_id'])->orderBy('id', 'desc')->get()]);
    }

    public function createInvoice(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::user()->id;
        $data['closing_number'] = 0;
        Invoice::create($data);
        return response()->json(['invoice' => Invoice::where('service_id', $data['service_id'])->first()]);
    }

    public function createMultimedia(Request $request){
        $data = $request->all();

        $image = $request->get('image');
        $folder = 'images/'.$data['service_id'];
        if(!\File::isDirectory($folder)){
            $response = mkdir(public_path($folder));
        }

          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          \Image::make($request->get('image'))->save(public_path($folder.'/').$name);

        $data['user_id'] = Auth::user()->id;
        $data['image'] = $name;
        ServiceMultimedia::create($data);
        return response()->json($this->getServiceMultimedia($data['service_id']));
    }

    public function getServiceMultimedia($serviceId)
    {
        $folder = 'images/'.$serviceId;
        return [
            'images'=> ServiceMultimedia::where('service_id',$serviceId)->where('is_video',0)->get(DB::raw("concat('$folder/',image) image,comments")),
            'videos' => ServiceMultimedia::where('service_id',$serviceId)->where('is_video',1)->get()
        ];
    }

    public function getMultimedia($serviceId){
        return response()->json($this->getServiceMultimedia($serviceId));
    }

    public function createCloseNumber(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::user()->id;
        ServiceClose::create($data);
        return response()->json(['closeNumber' => ServiceClose::where('service_id', $data['service_id'])->first()]);
    }

    public function getInvoice($serviceId){
        return response()->json(['invoice' => Invoice::where('service_id', $serviceId)->first()]);

    }

    public function getCloseNumber($serviceId){
        
        return response()->json(['closeNumber' => ServiceClose::where('service_id', $serviceId)->first()]);
    }

    public function getComments($serviceId)
    {
        return response()->json(['comments' => ServiceComments::where('service_id', $serviceId)->orderBy('id', 'desc')->get()->toArray()]);
    }

    public function getPayments($serviceId)
    {
        return response()->json(['payments' => ExtraPay::where('service_id', $serviceId)->orderBy('id', 'desc')->get()->toArray()]);
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

    public function formatServiceList($serviceList = null)
    {
        $serviceList = empty($serviceList) ? Service::all() : $serviceList;
        $services = [];
        foreach ($serviceList as $service) {
            $services[] = [
                'id' => $service->id,
                'title' => $service->title,
                'client_name' => $service->client_name,
                'status' => $service->statusName,
                'first_contact_date' => $service->first_contact,
                'service_date' => $service->service_date_label,
                'attendant' => $service->attendant_name,
                'receptor' => $service->receptor_name
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
                'service_date' => $service->service_date_label,
                'attended_date' => $service->attended_date_label,
                'client_phone' => $service->client_phone,
                'address_references' => $service->address_references
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
        Service::destroy($id);
    }
}
