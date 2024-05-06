<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\TechnologyController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminRoute;
use Illuminate\Support\Facades\Route;

Route::middleware([AdminRoute::class])->group(function() {
    Route::get('/user', [UserController::class, 'index']);
    Route::post('/menu-item/create/{project}', [MenuController::class, 'create']);
    Route::post('/technology/create', [TechnologyController::class, 'store']);
    Route::delete('/technology/delete/{technology}', [TechnologyController::class, 'destroy']);
    Route::put('/technology/{technology}/edit', [TechnologyController::class, 'update']);
});

Route::get('/technologies', [TechnologyController::class, 'index']);
Route::get('/menu/{menu_id}/{project}', [MenuController::class, 'index']);
Route::get('/admin-check', [UserController::class, 'is_there_admin']);
Route::post('/create-admin', [UserController::class, 'admin_create']);
Route::post('/login', [UserController::class, 'login']);