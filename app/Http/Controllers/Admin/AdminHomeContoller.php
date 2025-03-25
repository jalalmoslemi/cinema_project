<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminHomeContoller extends Controller
{
    public function index()
    {
        return Inertia::render('admin/home/page');
    }
}
