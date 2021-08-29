const os = require('os')
const path = require('path')
const util = require('util')
const v8 = require("v8")

const cpuCount = os.cpus().length

global.console.log(cpuCount);
//console.log(os);
console.log(`The file name is ${path.basename(__filename)}`);
console.log(`The process cpu usage ${process.cpuUsage()}`);
console.log(`The process id ${process.pid}`);
console.log(`The process id ${process.versions.node}`);

console.log(process.argv); //array for what we execute in node js

const [,,fname, lname] = process.argv
console.log(fname);

const grab = flag => { 
        let indexAfterFlag = process.argv.indexOf(flag) + 1 ;
        
        return process.argv[indexAfterFlag]        
}

const greeting = grab('--greeting')
const user = grab('--user')

console.log(`${greeting} ${user}`)

//Taking user inputs in run time
process.stdin.on('data', data =>{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    process.exit();
})
process.stdin.on('exit', data =>{
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
})

// let myInterval = setInterval(() => {
//     console.log("Test Me")
//     clearInterval(myInterval)
// }, 500);

//utility module
util.log(path.basename(__filename))
util.log("path.basename(__filename)")

util.log(v8.getHeapSnapshot())
util.log(v8.getHeapStatistics())

