<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CurriculumController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::group(['prefix' => 'app'], function () {
        Route::group(['prefix' => 'curriculum'], function() {
            Route::get('education', [CurriculumController::class, 'education'])->name('app.curriculum.education');
            Route::get('jobs', [CurriculumController::class, 'jobs'])->name('app.curriculum.jobs');
        });
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
