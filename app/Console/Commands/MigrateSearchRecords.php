<?php

namespace App\Console\Commands;

use App\SearchRecord;
use Illuminate\Console\Command;

class MigrateSearchRecords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:search-records {--offset=0} {--limit=500}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transform search records into new data structure';

    /**
     * Instance of SearchRecord model
     *
     * @var \App\SearchRecord
     */
    protected $searchRecord;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(SearchRecord $searchRecord)
    {
        parent::__construct();

        $this->searchRecord = $searchRecord;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $offset = $this->option('offset');
        $limit  = $this->option('limit');

        $columnMapper = [
            'Keyword search'                => 'keywords',
            'Coverage'                      => 'coverage',
            'Doctype'                       => 'doctypes',
            'Document Type'                 => 'doctypes',
            'Issue_area'                    => 'issue_areas',
            'Issue Area'                    => 'issue_areas',
            'Publication date'              => 'date_published_start',
            'Publication date equal to'     => 'date_published_start',
            'Publication date later than'   => 'date_published_start',
            'Publication date earlier than' => 'date_published_end',
            'Author'                        => 'authors',
            'Organization'                  => 'organizations',
            'Funder'                        => 'funders',
            'Categories'                    => 'categories',
            'categories'                    => 'categories',
            'Topic'                         => 'categories',
            'Topics'                        => 'categories',
            'Focus Area'                    => 'categories',
            'PEN Advocacy Tools'            => 'categories',
            'National Data'                 => 'categories',
            'Practice Area'                 => 'categories',
            'Subject Area'                  => 'categories',
            'Sub-topics'                    => 'categories',
        ];

        $this->searchRecord->skip($offset)->take($limit)->get()->lists('search', 'id')->each(function ($item, $key) use ($columnMapper) {
            $record = $this->searchRecord->find($key);
            // { Keyword search: health AND care } AND { Publication date: between 1938-01-01 and 2014-01-14 }
            $params = explode('}', $item);
            array_walk($params, function ($value, $key) use ($record, $columnMapper) {
                // $value = Keyword search: health AND care
                if ($value) {
                    $value = substr($value, strpos($value, '{') + 1);
                    $value = trim($value);
                    $split = strpos($value, ':');
                    if (false !== $split) {
                        // $value = ['Keyword search' => 'health AND care']
                        $key = substr($value, 0, $split);
                        $key = $columnMapper[$key];
                        $value = substr($value, $split + 1);
                        $value = trim(urldecode(html_entity_decode($value)));

                        if ('keywords' === $key) {
                            // $value = trim($value, '"\'');
                            // $value = str_ireplace([' and ', ' or ', 'the ', 'a ', 'an '], ' ', $value);
                            $value = $this->characterReplace($value);
                        }
                        // $key = 'keywords'; $value = 'health care']
                        $record->$key = $value;
                    }
                }
            });

            // Don't validate model for our purposes here
            $record->setRules([]);
            $record->save();
        });
    }

    /**
     * Reverse string replacements from old system
     *
     * @param  string $data
     * @return string
     */
    protected function characterReplace($data)
    {
        $data = str_replace('~amp~quot~semi~', '"', $data);
        $data = str_replace('~amp"semi~', '"', $data);
        $data = str_replace('~amp"percent~3B', '"', $data);
        $data = str_replace('~space~', ' ', $data); // apostrophe'
        $data = str_replace('~apos~', '\'', $data); // apostrophe'
        $data = str_replace('~comma~', ',', $data); // comma
        $data = str_replace('~dash~', '-', $data); // dash
        $data = str_replace('~op~', '(', $data); // open-paren (
        $data = str_replace('~cp~', ')', $data); // close-paren )
        $data = str_replace('~ob~', '[', $data); // open-bracket [
        $data = str_replace('~cb~', ']', $data); // close-bracket ]
        $data = str_replace('~ocurl~', '{', $data); // open-curly {
        $data = str_replace('~ccurl~', '}', $data); // close-curly }

        $data = str_replace('~quot~', '"', $data);
        $data = str_replace('~percent~', '%', $data);
        $data = str_replace('~hash~', '#', $data);
        $data = str_replace('~at~', '@', $data);
        $data = str_replace('~amp~', '&', $data);
        $data = str_replace('~amp~amp', '&', $data);
        $data = str_replace('~dollar~', '$', $data);
        $data = str_replace('~ast', '*', $data);
        $data = str_replace('~colon~', ':', $data);
        $data = str_replace('~semi~', ';', $data);

        return $data;
    }
}
