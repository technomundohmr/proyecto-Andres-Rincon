<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Proyect;
use App\Models\Technology;
use Carbon\Language;
use Illuminate\Http\Request;

class MenuController extends Controller
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
        $menus = Menu::where('proyect_id', $project_entity->id)->where('region', $menu_id)->first();
        if(empty($menus)) {
            $menus = Menu::create([
                'name' => $menu_id,
                'region' => $menu_id,
                'proyect_id' => $project_entity->id
            ]);
        }
        return response()->json($menus->menu_items);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
