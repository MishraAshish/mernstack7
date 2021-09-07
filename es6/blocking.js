//we will be using file system modules to do operation in file

let fileSystem = require("fs");
let eventEmitter = require("events");

//eventEmitter.on(readFile, "success")

console.log("File read start")

let data = fileSystem.readFileSync(__dirname+"/class.js","UTF-8"); //blocking code

console.log("file data", data)

console.log("File read ends")


console.log("File read start async")

fileSystem.readFile(__dirname+"/class.js","UTF-8",(err, data)=>{
    console.log("file data", data)
    console.log("file err", err)
}); //non-blocking code

console.log("File read ends async")

//REPL - Read Evaluate print and loop
//ctrl+c twice to come come out of loop
for (let index = 0; index < 100000; index++) {
    
    console.log(index)
    
}