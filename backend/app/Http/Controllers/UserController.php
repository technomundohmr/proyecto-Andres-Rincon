<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * check admin  user
     */
    public function is_there_admin()
    {
        $res['response'] = 0;
        $user = User::where('role', 'admin')->first();
        if(!empty($user)) {
            $res['response'] = 1;
        }
        return response()->json($res);
    }

    /**
     * create admin
     */
    public function admin_create(UserRequest $request) {
        $res = [
            'status' => 'failed',
            'message' => 'ocurrio un error inesperado',
        ];
        $user = $request->all();
        unset($user['passwordConfirm']);
        $user['password'] = bcrypt($user['password']);
        $user['role'] = 'admin';
        $user_entity = User::create($user);
        if(!empty($user_entity)) {
            $user_token = $user_entity->createToken('superadminToken')->plainTextToken;
            $res = [
                'status' => 'success',
                'message' => 'Administrador creado con éxito',
                'token' => $user_token,
            ];
        }
        return response()->json($res);
    }   
     
    
}
