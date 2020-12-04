// FS => File System
let fs = require("fs");
let cheerio = require("cheerio");

                 //low level data
let fileContent = fs.readFileSync("./f1.txt");
console.log(fileContent + "");


let html = fs.readFileSync("./index.html" ,"utf-8");
// console.log(html);


let ch = cheerio.load(html);
let h1Tag = ch("h1").text();
console.log(h1Tag);

let pTag = ch(".inside.p");
// <p class="inside p">Hey i am a p tag</p>
let pKaText = pTag.text();
console.log(pKaText);


let insidePTag = ch("ul .inside");
// <p class="inside">Hey i am a p tag inside ul</p>

console.log(insidePTag.text());
