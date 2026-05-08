<?php

namespace App\Modules\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Auth\Http\Requests\AuthenticateUserRequest;
use App\Modules\Auth\Http\Resources\AuthResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthenticateController extends Controller
{
    public function store(AuthenticateUserRequest $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => 'The provided credentials are wrong!'
            ]);
        }

        $request->session()->regenerate();
        return new AuthResource(Auth::user());
    }
}
