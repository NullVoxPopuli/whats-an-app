#!/usr/bin/env bash
#
# Requires https://github.com/dandavison/delta

dir="$(dirname $(readlink -f $0))"

src="$dir/../1-smol-est"
target="$dir/1-smol-est-as-custom-element"

delta $src $target --diff-args="--ignore-all-space"
