<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth', 'api-header']], function () {
    Route::get('is-logged', function (Request $request) {
        return response()->json([
            'is_logged' => !!$request->user()
        ], 200); 
    });

    Route::resource('insurances','InsurancesController');
    Route::resource('account-coverages','AccountCoverageController');
    Route::get('services/catalogs','ServiceController@getCatalogs');
    Route::get('services/tracking','ServiceController@getTracking');
    Route::get('services/comments/{serviceId}','ServiceController@getComments');
    Route::get('services/payments/{serviceId}','ServiceController@getPayments');
    Route::post('services/comment','ServiceController@createComment');
    Route::post('services/payment','ServiceController@createPayment');
    Route::post('services/invoice','ServiceController@createInvoice');
    Route::post('services/report','ServiceController@getReport');
    Route::post('services/account-coverages','ServiceController@getAccountCoverages');
    Route::resource('services','ServiceController');


    
    // all routes to protected resources are registered here  
    Route::get('users/list', function () {
        $users = App\User::all();
        $response = ['success' => true, 'data' => $users];
        return response()->json($response, 201);
    });
});

Route::group(['middleware' => 'api-header'], function () {

    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('user/login', 'UserController@login');
    Route::post('user/register', 'UserController@register');
});
