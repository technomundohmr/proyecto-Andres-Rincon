<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * index
     */
    public function index() 
    {
        $user = User::where('role', 'admin')->first();
        $res = $user;
        return response()->json($res);
    }
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
    public function admin_create(UserRequest $request) 
    {
        $res = [
            'status' => 'error',
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
     
    public function login(Request $request) 
    {
        $res = [
            'status' => 'error',
            'message' => 'Los datos ingresados no concuerdan',
        ];
        $login_data = $request->only('email', 'password');
        if(Auth::attempt($login_data)){
            $user = Auth::user();
            $user_token = $user->createToken('superadminToken')->plainTextToken;
            $res = [
                'status' => 'success',
                'message' => 'Bienvenido',
                'token' => $user_token,
            ];
        }
        return response()->json($res);
    }
    
}
