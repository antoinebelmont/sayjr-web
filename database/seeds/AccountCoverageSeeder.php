<?php

use App\Insurance;
use Faker\Factory;
use Illuminate\Database\Seeder;

class AccountCoverageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        for($i = 0;$i < 5;$i++){
            DB::table("account_coverages")->insert([
                [
                    "bank" => $faker->name(),
                    "coverage" => $faker->randomFloat(2),
                    "insurance_id" => $this->getInsuranceId()
                ]
            ]);
        }
    }

    private function getInsuranceId(){
        return rand(1,Insurance::all()->count());
    }
}
