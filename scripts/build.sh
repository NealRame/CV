#! /bin/bash

# exit with non-zero exit code if anything fails
set -e

npm install grunt-cli

ls -R $PWD/node_modules/.bin

$PWD/node_modules/.bin/grunt
