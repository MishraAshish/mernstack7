//Execution in javascipt uses Stack like other languages and this format is LIFO : Last In First Out
//call stack : LIFO - last in first out
//call stack visualization upto and extent

function foo(){
    throw new Error("Foo is not a good function");
}


function bar(){
    foo();
}

function baz(){
    bar();
}

console.log("Execution Started")

baz();

console.log("Execution End")


//blowing up of the stack, falling in indefinte loop

function callStackSizeExceed(params) {
    callStackSizeExceed()
}

callStackSizeExceed()