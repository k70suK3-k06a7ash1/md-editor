#!/bin/bash

author="nierNieRyorhaYoRHa"
output_file="commit_hashes.txt"

rm -f "$output_file"

git log --author="$author" --pretty=format:"%H" | while read -r line; do
  echo "$line" >> "$output_file"
done

echo "コミットハッシュが $output_file に生成されました。"