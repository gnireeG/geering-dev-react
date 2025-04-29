<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Curriculum>
 */
class CurriculumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(rand(2, 4)),
            'type' => fake()->randomElement(['education', 'job']),
            'from' => fake()->date(),
            'to' => fake()->date(),
            'institution' => fake()->company(),
            'description' => fake()->paragraph(1),
        ];
    }
}
