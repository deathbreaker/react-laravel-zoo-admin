<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.cz',
            'password' => bcrypt("123456789"),
            'age' => "22",
            'phonenumber' => 777777777,
            'role' => "admin"
        ]);

        User::create([
            'name' => 'some user',
            'email' => 'user@user.cz',
            'password' => bcrypt("123456"),
            'age' => "22",
            'phonenumber' => null,
            'role' => "user"
        ]);
    }
}
