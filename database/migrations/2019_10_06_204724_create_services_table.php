<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title',150);
            $table->text('description');
            $table->bigInteger('type_id',false,true);
            $table->text('address');
            $table->dateTime('first_contact_date',false,true);
            $table->bigInteger('insurance_id',false,true);
            $table->bigInteger('account_coverage_id',false,true);
            $table->bigInteger('user_contact_id',false,true);
            $table->dateTime('service_date')->nullable();
            $table->float('latitude');
            $table->float('longitude');
            $table->string('client_name',150);
            $table->bigInteger('user_assigned_id',false,true)->nullable();
            $table->string('status',15)->default("pending");
            $table->timestamps();

            $table->foreign('type_id')->references('id')->on('types');
            $table->foreign('insurance_id')->references('id')->on('insurances');
            $table->foreign('account_coverage_id')->references('id')->on('account_coverages');
            $table->foreign('user_contact_id')->references('id')->on('users');
            $table->foreign('user_assigned_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
