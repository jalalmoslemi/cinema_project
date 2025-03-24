<?php

use App\Http\Controllers\User\AuthController;


Route::middleware('guest')
    ->group(function () {
        Route::get('/register', [AuthController::class, 'registerWeb']);
        Route::post('/register', [AuthController::class, 'register']);

        Route::get('/login', [AuthController::class, 'loginWeb'])
            ->name('login');
        Route::post('/login', [AuthController::class, 'login']);
    });

Route::middleware('auth')
    ->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
    });