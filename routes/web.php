<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/todo', [TodosController::class,'index']);

Route::get('/gettodo', [TodosController::class,'getTodo']);

Route::post('/todos_create', [TodosController::class,'create']);

Route::post('/todos_delete', [TodosController::class,'delete']);

Route::post('/todos_status', [TodosController::class,'status']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
