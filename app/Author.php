<?php

namespace App;

use App\Traits\ModelType;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use DB;

class Author extends BaseModel implements SluggableInterface {

    use ModelType, SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'author';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['first', 'middle1', 'middle2', 'middle3', 'last', 'suffix'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        // Fullname is set to be unique because this is currently required in the database.
        // Because we are generating unique identifiers for each author, the system could handle multiple authors with the same fullname
        'fullname' => 'required|max:252|unique:author,fullname',
        'identifier' => 'required|max:255|unique:author,identifier',
        'first' => 'required|max:100',
        'middle1' => 'max:100',
        'middle2' => 'max:100',
        'middle3' => 'max:100',
        'last' => 'required|max:100',
        'suffix' => 'max:10',
        'linkedin' => 'max:255|url',
    ];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses \Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'fullname',
    ];

    /**
     * Resources that belong to an author
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function resources() {
        return $this->belongsToMany('App\Resource', 'link_resource_author', 'author_id', 'resource_id');
    }

    /**
     * Authors who have co-authored resources with this author
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getCoauthorsAttribute() {
        $resources = $this->resources->lists('research_id');
        $author_ids = $resources->count() ? DB::table('link_resource_author')->where('resource_id', $resources->toArray())->where('author_id', '!=', $this->id)->lists('author_id') : [];
        return $this->find($author_ids);
    }

    /**
     * Set fullname from other name attributes
     *
     * @return string
     */
    public function setFullname() {
        $fullname = [
            $this->first,
            $this->middle1,
            $this->middle2,
            $this->middle3,
            $this->last,
            $this->suffix,
        ];

        return $this->fullname = implode(' ', array_filter($fullname));
    }

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot() {
        parent::boot();

        // Set priority higher than `0` so that this runs before validation
        static::saving(
                function ($model) {
                    $model->setFullname();
                    $model->setFirstnameAndLastname();
                    $model->sluggify();
                }, $priority = 10
        );
    }

    /**
     * Set first, suffix, last... from fullname
     *
     * @return string
     */
    public function setFirstnameAndLastname() {
        if ($this->hasFullnameButNoFirstAndLastName()) {
            $this->authorSuffix();
            $this->analyseFullname();
        }
    }

    private function hasFullnameButNoFirstAndLastName() {
        $first = $this->first;
        $last = $this->last;
        $fullname = $this->fullname;

        return (isset($fullname) && $fullname != "") && (!isset($first) || $first == NULL) && (!isset($last) || $last == NULL);
    }

    // returns array('suffix' => 'suffix', 'data' => 'string with no suffix');
    private function authorSuffix() {
        $data = $this->fullname;
        $suffix = '';
        $string = $data;

        if (substr($data, -3) == 'Jr.') {
            $suffix = 'Jr.';
            $string = rtrim($data, 'Jr.');
        } else if (substr($data, -3) == 'Sr.') {
            $suffix = 'Sr.';
            $string = rtrim($data, 'Sr.');
        } else if (substr($data, -3) == 'III') {
            $suffix = 'III';
            $string = rtrim($data, 'III');
        } else if (substr($data, -2) == 'IV') {
            $suffix = 'IV';
            $string = rtrim($data, 'IV');
        } else if (substr($data, -1) == 'V') {
            $suffix = 'V';
            $string = rtrim($data, 'V');
        } else if (substr($data, -2) == 'II') {
            $suffix = 'II';
            $string = rtrim($data, 'II');
        }

        $string = trim($string);
        $string = rtrim($string, ",");

        $this->suffix = ($suffix != '') ? ', ' . $suffix : '';
        $this->fullname = $string;
    }

    private function analyseFullname() {
        $suffix = $this->suffix;
        $string = $this->fullname;

        /* 	Trying to deal with eg., L.M. Brooks, or L.M.N. Opie or Lisa M.P. Player. These should be:
          L.M. Brooks ==> 	L.	M.	Brooks
          L.M.N. Opie ==> 	L.	M.	N.	Opie
          Lisa M.V. Player ==> 	Lisa	M.	V.	Player
         */
        $return = '';

        $new_string = preg_replace('#[^a-zA-Z0-9\'\"\-]+#', ' ', $string);

        $new_string = preg_replace('/[\s]+/', ' ', $new_string); // remove 2+ spaces.
        // then explode on space -->
        $array = explode(" ", $new_string); // [0] => L. [1] => M. [2] => P. [3] => Del [4] => Brooks

        $last = array_pop($array); // Eg., $last holds "Brooks" and now $array doesn't include last word --- [0] => L. [1] => M. [2] => P. [3] => Del

        if (count($array) > 4) { // if ther's more than first, m1, m2, m3 -- error
            break;
        } else {
            $tick = 1; // setting this to determine which word we are on in the string - when tick = 1 we should be on the first name which will be either a string or an initial
            /* run through each item in array. first name can be any length but middle initials can only be 1 character long.
             */
            $check_array = array();
            foreach ($array AS $value) { // looping through eg., [0] => L. [1] => M. [2] => P. [3] => Del
                if ($tick == 1) { //  on first loop of the foreach this should be the first name. Can be a string of 1 character or more. If 1 character make it an initial, add a period.
                    if (strlen($value) == 1) {
                        $value = $value . '.';
                    }
                    $check_array[] = ucwords($value);
                } else { // we are on a $tick > 1 meaning that we're moving down the string into middle initials. We only allow for middle initials at this point - no spelled out names.
                    if (strlen($value) > 1) { // only middle initials allowed so this string has to be 1 character long
                        break;
                    } else {
                        $check_array[] = ucwords($value) . '.';
                    }
                }
                $tick = $tick + 1;
            }

            $check_array = array_filter($check_array); //  Getting rid of empty items.We started with L.M.N.O. Pee, now we have 0=>L. 1=>M. 2=>N. 3=>O. OR we have Lee M. N. O.

            $count = count($check_array);

            if (0 < $count && $count < 4) {
                $merge = array();
                for ($i = $count; $i < 4; $i++) {
                    $check_array[] = ""; // if we have less than 4 items in the array, we need to build out the array so that we have a first, m1, m2, m3 -- even if eg., m1, m2, m3 are blanks
                }

                $keys = array('first', 'middle1', 'middle2', 'middle3');
                $merge = array_combine($keys, $check_array);
                $fullname = $merge['first'] . " " . $merge['middle1'] . " " . $merge['middle2'] . " " . $merge['middle3'] . " " . ucwords($last) . $suffix;
                $fullname = preg_replace('/[\s]+/', ' ', $fullname);

                $this->first = trim($merge['first']);
                $this->middle1 = trim($merge['middle1']);
                $this->middle2 = trim($merge['middle2']);
                $this->middle3 = trim($merge['middle3']);
                $this->last = trim(ucwords($last));
                $this->suffix = ltrim($suffix, ', ');
                $this->fullname = trim($fullname);
            }
        }
    }

}
