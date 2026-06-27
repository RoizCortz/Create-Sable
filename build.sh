#!/usr/bin/env bash

FILE_NAME="create-sable.mrpack"
DIST_DIR="./dist"
FILE_PATH="$DIST_DIR/$FILE_NAME"

mkdir -p "$DIST_DIR"
rm -f "$FILE_PATH"

(
  cd Modrinth
  zip -r "../$FILE_PATH" .
)

echo "Build Done: $FILE_PATH"
