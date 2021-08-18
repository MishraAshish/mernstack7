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
