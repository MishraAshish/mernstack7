//using child_prcess
//exec - exec is used for synchronous processes
//spawn - executing in asynchronous manner
const childProc = require("child_process");



// childProc.exec("chrome.exe http://www.linkedin.com/learning")

// childProc.exec("ls", (err,data)=>{
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })


//spawn - for async module executions

const outputData = childProc.spawn("node", ["closures.js"])

outputData.stdout.on("data", data =>{
    console.log(`reading data from closures ${data}`)
})