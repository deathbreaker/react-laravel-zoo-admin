<?php

use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'name' => 'admin',
            'email' => 'frantisek.petko7@seznam.cz',
            'password' => bcrypt("zooadmin123456789"),
            'age' => 22,
            'phonenumber' => 777777777
        ]);
    }
}
