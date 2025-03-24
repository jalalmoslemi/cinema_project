<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function registerWeb()
    {
        return Inertia::render('register/page');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:3|max:255',
            'lName' => 'nullable|string|min:3|max:255',
            'email' => 'required|string|email|max:255'
        ], [
            'name' => 'نام الزامی',
            'lName' => 'نام اشتباه',
            'email' => 'ایمیل اشتباه'
        ]);

        $user = User::create([
            'name' => $request->post('name'),
            'lName' => $request->post('lName'),
            'email' => $request->post('email'),
        ]);

        Auth::login($user);
        return redirect('/');
    }
}
