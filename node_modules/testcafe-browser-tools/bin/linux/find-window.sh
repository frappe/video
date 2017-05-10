#!/bin/sh
xwininfo -tree -root | grep -i "$1" | sed -e "s/^\s*\(0x[0-9,A-H]\+\).*/\1/ip" -n
