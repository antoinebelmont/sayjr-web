<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiculeMaintenancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicule_maintenances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("service_required");
            $table->dateTime("service_date");
            $table->bigInteger("vehicule_id",false,true);
            $table->timestamps();

            $table->foreign('vehicule_id')
            ->references('id')
            ->on('vehicules');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicule_maintenances');
    }
}
