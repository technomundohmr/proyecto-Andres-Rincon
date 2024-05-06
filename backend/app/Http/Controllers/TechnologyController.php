<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $technologies = Technology::all();
        return response()->json($technologies);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];
        if($request->hasFile('logo')){
            $path = '/files/images/';
            $file = $request->file('logo');
            $filename = $file->getClientOriginalName();        
            $name_file = str_replace(' ', "_", $filename);
            $file->move(public_path($path), $name_file);
            $data = $request->all();
            $data['logo'] = $path . $name_file;
            $technology = Technology::create($data);
            if(!empty($technology)) {
                $res = [
                    'status' => 'success',
                    'message' => 'Tecnología creada con éxito',
                ];
            }
        }else {
            $res = [
                'status' => 'error',
                'message' => 'No se envío ninguna imagen'
            ];
        }
        return response()->json($res);
    }

    /**
     * Display the specified resource.
     */
    public function show(Technology $technology)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Technology $technology)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Technology $technology)
    {
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];

        $request_data = $request->except('_method');

        $file_path = public_path($technology['logo']);
        if($request->hasFile('logo')) {
            if(file_exists($file_path)){
                unlink($file_path);
            }
            $path = '/files/images/';
            $file = $request->file('logo');
            $filename = $file->getClientOriginalName();        
            $name_file = str_replace(' ', "_", $filename);
            $file->move(public_path($path), $name_file);
            $request_data['logo'] = $path . $name_file;
        } else {
            unset($request_data['logo']);
        }

        $technology->update($request_data);

        $res = [
            'status' => 'success',
            'message' => 'Tecnología actualizada con éxito',
        ];

        return response()->json($res);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Technology $technology)
    {
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];
        try {
            $technology->delete();
            $res = [
                'status' => 'success',
                'message' => 'Registro eliminado con éxito',
            ];
        } catch (\Throwable $th) {
            //throw $th;
            $res = [
                'status' => 'error',
                'message' => 'Error: ' . $th,
            ];
        }

        return response()->json($res);
    }
}
