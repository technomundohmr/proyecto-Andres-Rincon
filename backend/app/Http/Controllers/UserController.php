<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * check admin  user
     */
    public function is_there_admin(): bool 
    {
        $user = User::where('role', 'admin')->first();
        if(!empty($user)) {
            return true;
        }
        return false;
    }
     
    
}
