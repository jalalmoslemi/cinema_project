<?php

use App\Http\Controllers\Admin\AdminHomeContoller;
use Illuminate\Support\Facades\Route;

Route::get('/admin', [AdminHomeContoller::class, 'index']);