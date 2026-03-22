#!/usr/bin/env bash


dir="$(dirname $(readlink -f $0))"

src="$dir/../5-smol-app"
target="$dir/1-smol-app"

diff $src $target \
  --color \
  --minimal \
  --ignore-all-space
