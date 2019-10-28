<?php

use Illuminate\Database\Seeder;
use Faker\Factory;

class TypesSeeder extends Seeder
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
            DB::table('types')->insert([
                [
                    'name' => $faker->name
                ]
            ]);
        }
    }
}
