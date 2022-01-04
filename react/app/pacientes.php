<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class pacientes extends Model
{
    
    protected $primaryKey='idpaciente';
    protected $fillable=['idpaciente',
    'curp',
    'nombre',
    'apellidop',
    'apellidom',
    'direccion',
    'fechanac',
    'telefono',
    'edad',
    'foto',
    'alergias',
    'correo',
    'idmun',
    'idtipossan',
    'idenfermedad',
    'sexo'
];

}
