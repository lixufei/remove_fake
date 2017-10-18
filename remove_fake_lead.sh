#!/bin/bash

echo "start to remove fake lead ......"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mongo lead-management --quiet "$DIR/remove_fake_lead.js" > remove.json || { echo "remove failed"; exit 1;}
echo "remove success!"
