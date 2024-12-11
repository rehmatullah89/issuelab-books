<?php

namespace App\Helpers;

use Illuminate\Support\Collection;
use JavaScript as Javascript;

class ApplicationHelper
{
    public function checkboxes(Collection $collection, $name, $javascript = false)
    {
        $count     = 0;
        $camelCase = camel_case(str_plural($name));

        if ($javascript) {
            Javascript::put([
                ucfirst($camelCase) => $collection->flip()->toArray(),
            ]);
        }

        return $collection
            ->map(function ($value, $key) use (&$count, $name, $camelCase) {
                $field = [
                    'id'      => "{$name}_{$count}",
                    'name'    => "{$name}[]",
                    'value'   => $value,
                    'v-model' => "{$camelCase}.{$value}",
                ];
                $count += 1;
                return $field;
            })
            ->toArray();
    }
}
