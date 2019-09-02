#!/usr/bin/env node

const argument = process.argv[2];
const fs = require("fs");
const { blue, yellow } = require("colorette");

const handleFile = fileName =>
  fs.open(fileName, "w", error => {
    if (error) throw error;
  });

const showAbout = () => {
  const aboutText = `
    ${blue("muon")}${yellow(", a minimal text editor")}

    version 0.1
    Developed and mantained by Rafael de Azevedo
    Released under the Unlicense License
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
