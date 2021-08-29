//hoisting is the process of initializing var with undefined value and functions with complete definition
//this allows us to access them before declaration
//1. variable hositing
//2. functional hositing

//myfunc(); //not a function error
console.log(myfunc);
console.log(printName);

var sessionName = undefined;// default value for var literals

printName(); //functions get hoisted with their definition

console.log(`My session is ${sessionName}`);

var sessionName = "MERNStack";

console.log(`My session is ${sessionName}`);

function printName() {
    console.log("Saranaya");
}

printName(); 

//function expression 
var myfunc = function () {
    console.log("Robin")  
};



var index = undefined;

for (index = 0; index < 4; index++) {

    setTimeout(function () {
        console.log("index settimeout " + index);    // 0,1,2,3 after 1 second
    }, 1000)

    (function (index) { //using iife we can evaluate immediately
        setTimeout(function () {
            console.log("index iife " + index);    // 0,1,2,3 after 1 second
        }, 1000)
    })(index)   
    
}

console.log("index out " + index) //undefined