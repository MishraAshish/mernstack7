//classes using function : we can use constructor function to make our function behave like a standard object oriented
//class object

// class User {
//     constructor()
//     getNAme()
//     getAge()
// }
//var userObj = new User();

// a constructor function
var User = function (name, age) {
    this.name = name
    this.age = age
    this.getName = function () {
        return this.name
    }
}

var userObj = new User("Myat",20)

userObj.address = "somewhere in world";
console.log(userObj.getName())

//kind of inheritance in javascript
userObj.getAge = function () {
    return this.age;
}

console.log(userObj.getAge())

//overriding the functions
userObj.getName = function () {
    return "Sir/Ma'am "+this.name;
}

console.log(userObj.getName())