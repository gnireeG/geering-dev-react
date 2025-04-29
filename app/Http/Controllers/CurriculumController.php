<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Curriculum;

class CurriculumController extends Controller
{
    public function education()
    {
        return Inertia::render('app/curriculum/education',[
            'curricula' => Curriculum::where('type', 'education')->get(),
        ]);
    }

    public function jobs(){
        return Inertia::render('app/curriculum/jobs', [
            'jobs' => Curriculum::where('type', 'job')->get(),
        ]);
    }
}
