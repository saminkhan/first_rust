#!/usr/bin/env bash

rm -rf browser_data dist *_modules *lock* *.log*

pushd frontend
rm -rf pkg
pushd rust
rm -rf target *lock*
popd
popd