<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $statuses = DB::table('tasks_statuses')->pluck('id')->toArray();
        if (empty($statuses)) {
            return;
        }

        for ($i = 0; $i < 11; $i++) {
            DB::table('tasks')->insert([
                'id' => Str::uuid(),
                'name' => $faker->sentence(3),
                'description' => $faker->paragraph(),
                'status' => $faker->randomElement($statuses),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
