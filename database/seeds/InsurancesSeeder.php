<?php

use Illuminate\Database\Seeder;
use Faker\Factory;

class InsurancesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        for ($i = 0; $i < 10; $i++) {
            DB::table('insurances')->insert([
                [
                    'name' => $faker->name,
                    'status' => 1
                ]
            ]);
        }
    }
}
