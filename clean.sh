#!/usr/bin/env bash

rm -rf dist *_modules *lock* *.log*

pushd frontend
rm -rf pkg -rf target *lock*
popd