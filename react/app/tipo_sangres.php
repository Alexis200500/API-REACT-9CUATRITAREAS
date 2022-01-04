<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tipo_sangres extends Model
{
    protected $primaryKey='idtipossan';
    protected $fillable=['idtipossan','tipo'];
}
