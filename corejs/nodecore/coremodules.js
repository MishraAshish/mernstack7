//const { read } = require("fs");
const readline = require("readline");
const readline1 = require("buffer");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("How do you like node ? ", answer=>{
        console.log(`Heres my answer - ${answer}`)
})

console.log(readline1)

//read stream and write streams can be piped on each other