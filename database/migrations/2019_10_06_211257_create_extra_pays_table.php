<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtraPaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('extra_pays', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('pay_date');
            $table->bigInteger('receiver_id',false,true);
            $table->bigInteger('created_id',false,true);
            $table->decimal('amount',8,2);
            $table->text("comments");
            $table->string('authorized_by',150);
            $table->timestamps();

            $table->foreign('receiver_id')->references('id')->on('users');
            $table->foreign('created_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('extra_pays');
    }
}
