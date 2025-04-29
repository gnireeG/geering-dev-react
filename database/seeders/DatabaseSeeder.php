<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Curriculum;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Joel Geering',
            'email' => 'joel@geering.dev',
            'password' => bcrypt('password'),
        ]);

        Curriculum::factory(5)->create([
            'type' => 'education',
        ]);

        Curriculum::factory(5)->create([
            'type' => 'job',
        ]);
    }
}
