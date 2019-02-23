#!/usr/bin/env bash

printf "Specify project name: "
read name

if [[ -d "$name" ]]
then
    echo "Directory $name already exists. Replace? (y/n)"
    read -s -n 1 key
    if [[ ${key} = y ]]
    then
        rm -rf ${name}
    else
        echo "Project creation aborted"
        exit 0
    fi
fi

printf "Creating project: $name"
mkdir ${name}
cd ${name}

touch index.html
touch main.js

printf "<!doctype html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>$name</title>
    <script src='../lib/p5.js'></script>
    <script src='../lib/addons/p5.dom.js'></script>
    <script src='../lib/addons/p5.dom.js'></script>
    <script src='../common/util.js'></script>
    <script src='./main.js'></script>
</head>
<body>
</body>
</html>" > index.html

printf "const canvasSize = 600;

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function draw() {
    background('grey')
}

function keyPressed() {
    console.log(key);
}" > main.js

cd ../

if hash explorer.exe 2>/dev/null; then
    explorer.exe "http://localhost:63342/p5/$name/index.html"
else
    open "http://localhost:63342/p5/$name/index.html"
fi
