<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class enfermedades extends Model
{
    protected $primaryKey='idenfermedad';
    protected $fillable=['idenfermedad','enfermedad'];
}
