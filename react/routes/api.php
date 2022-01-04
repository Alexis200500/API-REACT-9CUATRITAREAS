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
Route::get('/cargamunicipios','PacientesController@cargamunicipios');
Route::get('/cargaenfermedades','PacientesController@cargaenfermedades');
Route::get('/cargasangres','PacientesController@cargasangres');
Route::get('/cargapacientes','PacientesController@cargapacientes');
Route::get('/buscarpaciente/{idpaciente}','PacientesController@buscarpaciente');
Route::delete('/eliminarpaciente/{ide}','PacientesController@eliminarpaciente');

Route::post('/altapaciente','PacientesController@altapaciente');
Route::put('/modificapaciente','PacientesController@modificapaciente');


/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
