<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\municipios;
use App\pacientes;
use App\enfermedades;
use App\tipo_sangres;

class PacientesController extends Controller {
    
    public function cargamunicipios() 
    {
        $consulta = municipios::orderby('nombre', 'ASC')->get();
        return response()->json($consulta, 201);
    }
    public function cargasangres() 
    {
        $consulta = tipo_sangres::orderby('tipo', 'ASC')->get();
        return response()->json($consulta, 201);
    }

    public function cargaenfermedades() 
    {
        $consulta = enfermedades::orderby('enfermedad', 'ASC')->get();
        return response()->json($consulta, 201);
    }

    public function cargapacientes()
    {
        $consulta = \DB::select(
            "SELECT 	p.idpaciente,
            p.curp,
            p.nombre,
            p.apellidop,
                p.apellidom,
                p.direccion,
                p.fechanac,
                p.telefono,
                p.edad,
                p.foto,
                p.alergias,
                p.correo,
                p.idmun,
                m.nombre AS municipio,
                p.idtipossan,
                t.tipo AS sangre,
                p.idenfermedad, 
                e.enfermedad AS enfermedad,
                p.sexo,
                p.created_at,
                p.updated_at
        
                    FROM pacientes AS p 
                    INNER JOIN tipo_sangres AS t ON t.idtipossan = p.idtipossan 
                    INNER JOIN municipios AS m ON m.idmun = p.idmun
                    INNER JOIN enfermedades AS e ON e.idenfermedad = p.idenfermedad

            ORDER BY p.apellidop ASC");
            return response()->json($consulta, 201);
    }

    public function buscarpaciente($idpaciente)
    {
        $consulta = \DB::select(
            "SELECT 
            p.idpaciente,
            p.curp,
            p.nombre,
            p.apellidop,
                p.apellidom,
                p.direccion,
                p.fechanac,
                p.telefono,
                p.edad,
                p.foto,
                p.alergias,
                p.correo,
                p.idmun,
                m.nombre AS municipio,
                p.idtipossan,
                t.tipo AS sangre,
                p.idenfermedad, 
                e.enfermedad AS enfermedad,
                p.sexo,
                p.created_at,
                p.updated_at
        
                    FROM pacientes AS p 
                    INNER JOIN tipo_sangres AS t ON t.idtipossan = p.idtipossan 
                    INNER JOIN municipios AS m ON m.idmun = p.idmun
                    INNER JOIN enfermedades AS e ON e.idenfermedad = p.idenfermedad
                    WHERE idpaciente=$idpaciente
        
                    ORDER BY p.apellidop ASC ");
            return response()->json($consulta[0], 201);
        }

    public function eliminarpaciente($idpaciente) 
    {
        $consulta = pacientes::find($idpaciente);
        $consulta->delete();
        return response()->json(null, 204);
    }

    public function altapaciente(Request $request)
    {
        $consulta = pacientes::create($request->all());
        return response()->json($consulta, 201);
    }

    public function modificapaciente(Request $request) 
    {
        $pacientes = pacientes::find($request->idpaciente);
        $pacientes->update($request->all());
        return response()->json($pacientes, 200);
    }


}
