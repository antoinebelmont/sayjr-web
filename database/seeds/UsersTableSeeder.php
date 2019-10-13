<?php

use Illuminate\Database\Seeder;
use Faker\Factory;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        DB::table('users')->insert([
            [
                'name' => $faker->name,
                'email' => '666.strigoi@gmail.com',
                'phone' => '3311405492',
                'password' => bcrypt('belmont'),
                'role_id' => 1
            ]
           ]);
    }
}
