#!/usr/bin/env bash


dir="$(dirname $(readlink -f $0))"

src="$dir/../3-embedding-smol-est-no-build/2-embedding-in-to-plain-html"
target="$dir/2-embedding-in-to-plain-html"

delta $src $target --diff-args="--ignore-all-space"
