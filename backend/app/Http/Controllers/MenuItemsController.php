<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\MenuItems;
use App\Models\Proyect;
use App\Models\Technology;
use Illuminate\Http\Request;

class MenuItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($menu_id, $project, Request $request)
    {
        $project_entity = Proyect::where('machine_name', '=', $project)->first();
        if(empty($project_entity)){
            if($project == 'portfolio'){
                $technology = Technology::where('name', 'ReactJS')->first();
            }
            $client_path = $request->server('HTTP_REFERER');
            $project_entity = Proyect::create([
                'name' => 'Portafolio',
                'machine_name' => $project,
                'language' => 'ES',
                'technology_id' => $technology->id,
                'url' => $client_path,
            ]);
        }
        $menu = Menu::where('proyect_id', $project_entity->id)->where('region', $menu_id)->first();
        
        if(empty($menu)) {
            $menu = Menu::create([
                'name' => $menu_id,
                'region' => $menu_id,
                'proyect_id' => $project_entity->id
            ]);
        }

        $menu_items = MenuItems::where('menu_id' , $menu->id)->orderBy('weight', 'asc')->get();
        return response()->json($menu_items);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($menu_id, $project, Request $request)
    {
        $menu_item = NULL;
        $project_entity = Proyect::where('machine_name', '=', $project)->first();
        $menu = Menu::where('proyect_id', $project_entity->id)->where('region', $menu_id)->first();
        
        $data = $request->all();

        $data['menu_id'] = $menu->id;
        
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];
        if($request->hasFile('icon')){
            $path = '/files/images/';
            $file = $request->file('icon');
            $filename = $file->getClientOriginalName();        
            $name_file = str_replace(' ', "_", $filename);
            $file->move(public_path($path), $name_file);
            $data['icon'] = $path . $name_file;
            $menu_item = MenuItems::create($data);

        }else {
            $data['icon'] = NULL;
            $menu_item = MenuItems::create($data);
        }

        if(!empty($menu_item)) {
            $res = [
                'status' => 'success',
                'message' => 'Item del menu ' . $menu_id . ' creada con éxito',
            ];
        }
        return response()->json($res);
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItems $menuItems)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MenuItems $menuItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItems $menuItems)
    {
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];

        $file_path = false;
        
        $request_data = $request->except('_method');
        
        if(!empty($menuItems['icon']))
        {
            $file_path = public_path($menuItems['icon']);
        }

        if($request->hasFile('icon')) {
            if($file_path && file_exists($file_path)){
                unlink($file_path);
            }
            $path = '/files/images/';
            $file = $request->file('icon');
            $filename = $file->getClientOriginalName();        
            $name_file = str_replace(' ', "_", $filename);
            $file->move(public_path($path), $name_file);
            $request_data['icon'] = $path . $name_file;
        } else {
            unset($request_data['icon']);
        }

        $menuItems->update($request_data);

        $res = [
            'status' => 'success',
            'message' => 'Item de menú actualizado con éxito',
        ];

        return response()->json($res);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItems $menuItems)
    {
        $res = [
            'status' => 'error',
            'message' => 'ocurrio un error inesperado',
        ];
        try {
            $menuItems->delete();
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
