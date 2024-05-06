<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AdminRoute
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();
        if(empty($token)) {
            return response()->json(['error' => 'Token not provided.'], 401);
        } else {
            $accessToken = PersonalAccessToken::findToken($token);
            if(!$accessToken) {
                return response()->json(['message' => 'Token not found'], 401);
            }
            $user = $accessToken->tokenable;
            if($user->role == 'admin'){
                return $next($request);
            }
        }
        return response()->json(['error' => 'not adminuser'], 401);
    }
}
