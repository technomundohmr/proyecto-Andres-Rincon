<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('metatags', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('tag');
            $table->text('body');
            $table->foreignId('proyect_id')->constrained('proyects');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metatags');
    }
};
