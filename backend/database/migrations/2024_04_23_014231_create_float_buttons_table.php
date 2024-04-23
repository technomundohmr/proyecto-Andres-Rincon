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
        Schema::create('float_buttons', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('icon');
            $table->string('url');
            $table->string('classes')->nullable();
            $table->string('target')->nullable();
            $table->foreignId('block_id')->constrained('blocks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('float_buttons');
    }
};
