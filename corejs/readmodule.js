// we can import any module in any js file by using require (in built) or by using import keyword (from es6)

var user = require("./a-module"); //es5

console.log("user", user)

console.log("userName", user.getName())