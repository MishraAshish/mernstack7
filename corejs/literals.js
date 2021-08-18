//Instead of using multiple variable we should have common literals 
//and assign key value to them to avoid exploitation of globals

var firstName = "An" , lastName = "Vu" , address = "Somewhere in US";

//firstName = "Robin";

//an object, and its always going to be a key value pair
var UserAn = {
    "firstName" : "An", //key : value
    "lastName" : "Vu",
    "address" : "Somewhere in US"
} // this is termed as object literal or literal

console.log(UserAn.firstName)

UserAn.firstName = "Margi";

console.log(UserAn.firstName)