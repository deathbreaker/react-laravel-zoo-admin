<?php namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;

class DbDrop extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:drop';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        if (!$this->confirm('CONFIRM DROP AL TABLES IN THE CURRENT DATABASE? [y|N]')) {
            exit('Drop Tables command aborted');
        }

        //$colname = 'Tables_in_' . env('DB_DATABASE');

        $tables = DB::select("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name");


        DB::beginTransaction();

        foreach($tables as $table) {
            $table->name === "sqlite_sequence" ?  : DB::statement("DROP TABLE $table->name");
        }

        DB::commit();

        //$droplist = implode(', ', $droplist);


        //turn off referential integrity
        //DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        //turn referential integrity back on
        //DB::statement('SET FOREIGN_KEY_CHECKS = 1');


        $this->comment(PHP_EOL."All tables from Your database were dropped successfully.".PHP_EOL);

    }
}
