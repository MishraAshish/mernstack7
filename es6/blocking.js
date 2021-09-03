//we will be using file system modules to do operation in file

let fileSystem = require("fs");

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