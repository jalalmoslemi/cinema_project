<?php

use App\Http\Controllers\User\AuthController;

Route::get('/register', [AuthController::class, 'registerWeb']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth')
    ->group(function () {
        Route::get('/logout', [AuthController::class, 'logout']);
    });