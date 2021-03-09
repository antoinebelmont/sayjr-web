<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceMultimediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_multimedia', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('service_id',false,true);
            $table->longtext('image');
            $table->text('comments');
            $table->tinyInteger('is_video')->default(0);
            $table->bigInteger('user_id',false,true);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('service_id')->references('id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_multimedia');
    }
}
