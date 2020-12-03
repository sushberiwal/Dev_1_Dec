// FS => File System
let fs = require("fs");


                 //low level data
let fileContent = fs.readFileSync("./f1.txt");

console.log(fileContent + "");



let html = fs.readFileSync("./index.html" ,"utf-8");
console.log(html);

