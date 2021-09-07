<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToEnrolmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('enrolments', function (Blueprint $table) {
            $table->date('birthdate');
            $table->string('passport');
            $table->string('last_institute');
            $table->string('recent_degree');
            $table->float('degree_score');
            $table->string('ref')->unique();
            $table->float('writing');
            $table->float('speaking');
            $table->float('reading');
            $table->float('comprehension');
            $table->text('reason');
            $table->text('nid')->nullable();
            $table->text('diploma')->nullable();
            $table->text('photo')->nullable();
            $table->integer('method_id')->unsigned()->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('enrolments', function (Blueprint $table) {
            $table->dropColumn('birthdate');
            $table->dropColumn('passport');
            $table->dropColumn('last_institute');
            $table->dropColumn('recent_degree');
            $table->dropColumn('degree_score');
            $table->dropColumn('ref');
            $table->dropColumn('writing');
            $table->dropColumn('speaking');
            $table->dropColumn('reading');
            $table->dropColumn('comprehension');
            $table->dropColumn('reason');
            $table->dropColumn('nid');
            $table->dropColumn('diploma');
            $table->dropColumn('photo');
            $table->dropColumn('method_id');
        });
    }
}
