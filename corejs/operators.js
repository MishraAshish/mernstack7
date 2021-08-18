//operators allow us to perform some conditional or any logical operations similar to other language

// and - &&,  or - ||, assignment - = , compare - ==, compare - ===, less <, >, <=, >=, toggle or negation - !

var MyAge = 18;

if (typeof myAge != "undefined" && myAge >= 18) {
    console.log("Eligible to vote")    
} else {
    console.log("Not Eligible to vote")
}

//for other countries
var voterAge = "21";//21

//if (voterAge == 21) { // == it only compares the value
if (voterAge === 21) { // === it compares the value as well as types
    console.log("Eligible to vote C21")    
} else {
    console.log("Not Eligible to vote C21")
}

//ternary operator

var day = "Wednesday";

day === "Wednesday" ? console.log("Say Good Morning") : console.log("Pray For Afganistan");
