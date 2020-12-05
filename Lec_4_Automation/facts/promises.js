let fs = require("fs");


let pendingPromise =  fs.promises.readFile("./f11.txt");

// console.log(pendingPromise);

// scb => success callback
pendingPromise.then( function(data){
    console.log("Inside scb");
    console.log(data+"");
});


// fcb => failed callback
pendingPromise.catch( function(error){
    console.log("Inside fcb");
    console.log(error);
} )