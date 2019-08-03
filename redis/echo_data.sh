#!/bin/sh
index=1;
for index in `seq 0 8000000`
do
    export PERS_ID=$((1000000000+index));
    export CONTENT="\"{ _id: $PERS_ID, 'strasse': 'strasse of $PERS_ID', 'plz': 'plz of $PERS_ID', 'ort': 'ort of $PERS_ID' }\"";
    echo "SET $PERS_ID" $CONTENT;
    index=$((index+1));
done;