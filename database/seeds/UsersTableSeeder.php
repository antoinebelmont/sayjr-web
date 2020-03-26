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
                'name' => 'Belmont',
                'email' => '666.strigoi@gmail.com',
                'phone' => '3311405492',
                'password' => bcrypt('belmont'),
                'role_id' => 1
            ],
            [
                'name' => 'Principal SAYJR',
                'email' => 'sayjr@sayjr.com',
                'phone' => '3112710095',
                'password' => bcrypt('sayjr2020'),
                'role_id' => 2
            ]
           ]);
    }
}
