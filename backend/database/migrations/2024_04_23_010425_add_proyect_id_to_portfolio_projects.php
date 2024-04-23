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
        Schema::table('portfolio_project_technologies', function (Blueprint $table) {
            $table->foreignId('portfolio_project_id')->constrained('portfolio_projects');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('portfolio_project_technologies', function (Blueprint $table) {
            //
        });
    }
};
