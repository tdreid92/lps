#!/bin/bash
set +ex;

cp -f package.json temp;
echo "Installing all package-*.json...";

./get-lambdas.sh p | while read -r package; do
  echo -e "\nFile: $package";
#  mv -f $File package.json;
  npm install;
done

#for File in *.json; do
#  echo -e "\nFile: $File";
#  mv -f $File package.json;
#  npm install;
#done

cp -f temp package.json;
rm -f temp;
#EOF