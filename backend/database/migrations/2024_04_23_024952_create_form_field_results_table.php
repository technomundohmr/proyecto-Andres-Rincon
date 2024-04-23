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
        Schema::create('form_field_results', function (Blueprint $table) {
            $table->id();
            $table->text('data');
            $table->foreignId('form_submission_id')->constrained('form_submissions');
            $table->foreignId('form_item_id')->constrained('form_items');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('form_field_results');
    }
};
