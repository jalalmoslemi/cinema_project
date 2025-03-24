<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
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
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|max:255',
        ], [
            'name' => 'نام الزامی',
            'lName' => 'نام اشتباه',
            'email' => 'ایمیل اشتباه',
            'password' => 'رمز اشتباه'
        ]);

        $user = User::create([
            'name' => $request->post('name'),
            'lName' => $request->post('lName'),
            'email' => $request->post('email'),
            'password' => $request->post('password'),
        ]);

        Auth::login($user);
        return redirect('/');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function loginWeb()
    {
        return Inertia::render('login/page');
    }

    public function login(Request $request)
    {
        $inputs = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8|max:255'
        ], [
            'email' => 'ایمیل اجباری',
            'password' => 'رمز اجباری'
        ]);

        if (
            !Auth::attempt($inputs)
        ) {
            throw ValidationException::withMessages([
                'email' => 'ایمیل یا رمز اشتباه است',
            ]);
        }

        return redirect('/');
    }
}
