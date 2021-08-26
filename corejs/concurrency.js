//using settimeout example

console.log("First Line 1")

setTimeout(
        function () { //non blocking execution done by javascript using a concurrency model and event loop
            console.log(2)
        }, 
    1000)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(3)
}, 0)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(4)
}, 500)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(5)
}, 1000)

console.log("Last Line 6")