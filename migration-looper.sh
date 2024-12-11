#!/bin/bash

# Hosts
TOTAL=400000
OFFSET=0
LIMIT=5000
while [ $OFFSET -lt $TOTAL ]; do
    echo The offset is $OFFSET
    php artisan migrate:search-records --offset=$OFFSET --limit=$LIMIT
    let OFFSET=OFFSET+LIMIT
done
