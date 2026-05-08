<?php

namespace App\Modules\Auth\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Modules\Auth\Http\Requests\RegisterUserRequest;
use App\Modules\Auth\Http\Resources\AuthResource;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function store(RegisterUserRequest $request)
    {
        $validated = $request->validated();

        $user = User::create($validated);
        Auth::login($user);

        return new AuthResource($user);
    }
}
