#!/bin/sh
# use: ./convert_move.sh example-notebook

echo "Converting notebook"
jupyter nbconvert --to markdown --NbConvertApp.output_files_dir "images/$1" "$1.ipynb"
mv "$1.md" "../content/blog/"

if [ -d "../static/images/$1" ]
then
  rm -r "../static/images/$1"
fi
mv "images/$1" "../static/images/"

# clean up directory
for file in *; do
      if [ ${file: -4} == ".png" ]
      then
        rm $file
      fi
done;
rm -r images
