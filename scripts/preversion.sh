#!/bin/bash -e

rm -rf ./dist/*

echo ""
echo "FRIGGING BOOTSTRAP: COMPILING DEV RELEASE"
echo "======================================================="
FRIG_ENV="production" webpack --progress --bail

echo ""
echo "FRIGGING BOOTSTRAP: COMPILING MINIFIED RELEASE"
echo "======================================================="
FRIG_ENV="production" FRIG_MIN="minify" webpack --progress --bail
