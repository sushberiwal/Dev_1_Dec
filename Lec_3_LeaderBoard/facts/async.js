let fs = require("fs");

console.log("Start");


fs.readFile(  "./f1.txt" ,  cb  );

function cb(error , data){
    console.log(data+"");
}
console.log("End");

// infinite loop
while(true){

}





