#!/usr/bin/env node

const { blue, yellow } = require("colorette");
const fs = require("fs");
const readline = require("readline");

const argument = process.argv[2];

const handleFile = fileName => {
  const setCallback = (error, data, action) => {
    if (error) throw error;
    return action(data);
  };

  // const createFileBuffer = (fileContents = "") =>
  //   Buffer.from(fileContents, "utf8");

  // const fileContents = fs.readFile(fileName, (error, data) => {
  //   if (error) throw error;
  //   return data;
  // });

  // const fileBuffer = createFileBuffer(fileContents);

  const fileDescriptor = fs.openSync(
    fileName,
    "w",
    setCallback(error, fileContents, text => console.log(text))
  );
};

const showAbout = () => {
  const versionNumber = require("./package.json").version;
  const aboutText = `
    ${blue("muon")}${yellow(", a nano text editor")}

    version ${versionNumber}
    Developed and mantained by Rafael de Azevedo
    Released under the Unlicense License:
    https://unlicense.org/
  `;
  console.log(aboutText);
};

switch (argument) {
  case "about":
    showAbout();
    break;
  default:
    handleFile(argument);
    break;
}
