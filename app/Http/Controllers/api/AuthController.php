<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(){

    }


    public function register(RegisterRequest $request){
        $request->validated();

        $user = User::create($request);

        return response()->json([
            'user' => $user,
        ]);
    }

    public function refresh(){

    }

    public function logout(){

    }
}
