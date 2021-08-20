//encapsulation in JS : we decide what props and methods are accessible to the outer world
//closure : we have parent child relation where parent function returns a child and the space between them
// can be used as public or private, thus givin us an encapsulation like behaviour

function Parent(name, age) {
    var name = name; //public
    var age = age; //public
    var accountBalance = "$1000"; //private
    var accountPin = "23xyzn9"; //private
    var accountType = "saving"; //public

    var Child = function (address, isAdmin) {

                    return {
                                //name : name // shorthand while using es6 we can use only one of it, if the key and the variable name both are same
                                name,
                                age,
                                accountType,
                                address
                        }
    }
    return Child;
}

var parentObj = Parent("Margi",22);
//console.log(parentObj)
var childVal = parentObj("Somewhere in afganistan",false)
console.log(childVal)

//please use ternary operator and isAdmin argument if its true we also see the - accountBalance alongwith other details