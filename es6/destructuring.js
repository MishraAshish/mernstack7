//a way to assign data without tracing from object to object and without intializing multiple variables

//Two Type of destructuring present
//1. Array Destructing

//a. basic assignments

// let numbers = ["one", "two", "three"];
// let [one, two, three] = numbers;

// console.log(`one ${one}`);
// console.log(`two ${two}`);
// console.log(`three ${three}`);
//console.log(`four ${four}`); //ReferenceError: four is not defined

//b. default 
// let numbers = [ , "two", "three"];
// let [one = 1, two = 2, three = 3, four = 4] = numbers;

// console.log(`one ${one}`);
// console.log(`two ${two}`);
// console.log(`three ${three}`);
// console.log(`four ${four}`);

//c.  rest operator (this should always be the last identifier)

let myList = [1,2,3,4,5];

let [firstValue, ...restValue] = myList;

console.log(firstValue)
console.log(restValue)

//d.  swapping of values

let a =1, b= 2;

[a,b] = [b,a]

console.log(a +" "+ b)


//2. Object Destructuring

//a. single level 

let user = {
    name : "Myat",
    age : 21,
    address : "7th street new york lane"
}
