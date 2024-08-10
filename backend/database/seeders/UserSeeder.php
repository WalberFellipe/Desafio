<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!DB::table('users')->where('email', 'user@email.com')->exists()) {
            DB::table('users')->insert([
                'id' => Str::uuid(),
                'email' => 'user@email.com',
                'password' => Hash::make('123456'),
                'created_at' => now(),
                'updated_at' => now(),
                'is_active' => true,
            ]);
        }
    }
}
