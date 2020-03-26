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
        DB::table('types')->insert([
            [
                'name' => 'Fontanería'
            ],
            [
                'name' => 'Electricidad'
            ],
            [
                'name' => 'Vidrio'
            ],
            [
                'name' => 'Herrería'
            ],
            [
                'name' => 'Aluminio'
            ],
            [
                'name' => 'Cerrajería'
            ],
            [
                'name' => 'Carpintería'
            ],
            [
                'name' => 'Albañilería'
            ],
            [
                'name' => 'Pintura'
            ],
            [
                'name' => 'Obra civil'
            ],
        ]);
    }
}
