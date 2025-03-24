<?php

use App\Http\Controllers\User\AuthController;

Route::get('/register', [AuthController::class, 'registerWeb']);
Route::post('/register', [AuthController::class, 'register']);