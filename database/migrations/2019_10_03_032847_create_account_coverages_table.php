<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountCoveragesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_coverages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("bank",50);
            $table->float("coverage",12,2);
            $table->bigInteger("insurance_id",false,true);
            $table->timestamps();

            $table->foreign('insurance_id')
            ->references('id')
            ->on('insurances');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('account_coverages');
    }
}
