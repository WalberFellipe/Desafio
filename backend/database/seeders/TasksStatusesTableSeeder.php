<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TasksStatusesTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks_statuses')->insert([
            [
                'id' => 1,
                'key' => 'TO_DO',
                'description' => 'Pendente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'key' => 'IN_PROGRESS',
                'description' => 'Em Andamento',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'key' => 'DONE',
                'description' => 'Concluída',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
