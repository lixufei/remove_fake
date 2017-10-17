#!/bin/bash

echo "start to count fake leads......"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mongo lead-management --quiet "$DIR/count_fake_lead.js" > count_fake_lead.txt || { echo "write count_fake_lead.txt failed!"; exit 1;}
echo "write count_fake_lead.txt success!"

mongo lead-management --quiet "$DIR/count_lead_with_fake_and_other.js" > count_lead_with_fake_and_other.txt || { echo "write count_lead_with_fake_and_other.txt failed!"; exit 1;}
echo "write count_lead_with_fake_and_other.txt success!"

echo "wait for remove owner......"
