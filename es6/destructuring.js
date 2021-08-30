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

// console.log(firstValue)
// console.log(restValue)

//d.  swapping of values

let a =1, b= 2;

[a,b] = [b,a]

// console.log(a +" "+ b)


//2. Object Destructuring : copies the values to the left side object when keys are matched

//a. single level and nested objects

let user = {
    name : "Myat",
    age : 21,
    address : "7th street new york lane",
    sessions : {
        session1 : "Javascript",
        session2 : "ES6",
        session3 : "AWS"
    }
}

//let address = user.address;
//let name = user.name;
//let age = user.age;
//let session2 = user.sessions.session2

let {name, age, address = "Default Address", sessions:{ session2, session4 = "Java 17"}} = user
//let {name, age, address = "Default Address", ...sessions} = user

console.log(address)
console.log(name)
console.log(age)
console.log(session2)
console.log(session4)
//console.log(sessions)


//question :

let Student = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in student