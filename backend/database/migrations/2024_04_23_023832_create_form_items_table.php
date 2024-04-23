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
        Schema::create('form_items', function (Blueprint $table) {
            $table->id();
            $table->string('machine_name');
            $table->string('label')->nullable();
            $table->string('type')->default('text');
            $table->string('placeholder')->nullable();
            $table->text('description')->nullable();
            $table->boolean('required');
            $table->string('classes')->nullable();
            $table->string('fid');
            $table->string('name');
            $table->foreignId('form_id')->constrained('forms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_items');
    }
};
