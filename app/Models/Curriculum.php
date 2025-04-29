<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Curriculum extends Model
{

    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'from',
        'to',
        'institution',
        'description',
    ];
}
