//Objects : the basic building block of js can be recognised as memory space to hold values in key/value
// we can create object - {} or using the Object class

var User = {
    name : "An Vu",
    age : 22,
    getName : function () {
        return this.name;
    }
}

console.log(User.getName()) //An Vu

//inheritance 
//1. by using the new keyword
// we should avoid this for as instead of making to separate objects it copies the same memory location to child
// var Student = new Object(User)
// Student.address = "Somewhere in the world";
// Student.name = "Robin";

// Student.getAddress = function () {
//     return this.address;
// }

// console.log(Student.getName()) //Robin
// console.log(Student.getAddress()) //Somewhere in the world
// console.log(User.getAddress()) //Somewhere in the world

//2. by using the Object.Create
// this will have separate object for student
var Student = Object.create(User)
Student.address = "Somewhere in the world";
Student.name = "Robin";

Student.getAddress = function () {
    return this.address;
}

console.log(Student.getName()) //Robin
console.log(Student.getAddress()) //Somewhere in the world
//console.log(User.getAddress()) //error

//merging two objects, with deep copy

var obj1 = {name : "MyName", age : 29, salary : 250}
var obj1_1 = {name : "MyName1", session:"MERNStack"}
var obj2 = {name : "YourName", address:"New City ", skills : "Javascript"}

obj1 = Object.assign(obj1, obj1_1, obj2); //over-rides the values from source object into target

console.log(obj1);

//if we wish to break the prototype chain
//you need to pass null in your object create constructor

var nullProtoype =  Object.create(null);

console.log(nullProtoype.__proto__)

var emptyProtoype =  Object.create({});

console.log(emptyProtoype.__proto__)