//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//1. we can declare and assigned var multple times, however let can be declared only once and can be assigned multiple times
// where as const needs to be defined and declared at the same time and can't be reassigned again
    //let sessionName = "javascript"; SyntaxError: Identifier 'sessionName' has already been declared

    var sessionName = "javascript";
    var sessionName = "es6";
    console.log(sessionName)

    //let SessionName; //we can only define assign value later (possible for let)
    let SessionName = "javascript";
    // let SessionName = "es6"; //err : SyntaxError: Identifier 'SessionName' has already been declared
    
    SessionName = "es6";
    console.log(SessionName)

    //const mySession; //we can't just define a const //err : SyntaxError: Missing initializer in const declaration
    const mySession = "nodejs";
    //const SessionName = "es6";

    //mySession = "express"; //error : TypeError: Assignment to constant variable.

    const User = {
        name : "Robin",
        age : 19
    }

    //User = { name: 'An Vu', age: 19 }

    User.name = "An Vu"; //hack as we are updating the reference of object not the const object

    console.log(User)


//2. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting
 
    // {
    //     var Name = "Margi"
    // }
    // console.log("name " + Name);

    //{
        //let Name = "Margi"
        //const Name = "Margi"
    //}
    //console.log("name " + Name);

//3. let/const resolve issues due to functional scope hold with var
//var index = undefined;

// for (index = 0; index < 4; index++) {

//     // setTimeout(function () {
//     //     console.log("index settimeout " + index);    // 0,1,2,3 after 1 second
//     // }, 1000)

//     (function (index) { //using iife we can evaluate immediately
//         setTimeout(function () {
//             console.log("index iife " + index);    // 0,1,2,3 after 1 second
//         }, 1000)
//     })(index)    
    
// }

//console.log("index out " + index) //undefined


// for (let index = 0; index < 4; index++) {
//         setTimeout(function () {
//             console.log("index let " + index);    // 0,1,2,3 after 1 second
//         }, 1000)
//}
//console.log("Let " + index)