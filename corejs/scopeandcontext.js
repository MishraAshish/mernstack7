//scope and context : both refer to the "this" keyword in a function
//scope is the accessibility of things in executing function
//context refers to the object over which function being called/executed

var User = {
    name : "Margi",
    age : 21,
    getName : function () {
                //console.log("this" + JSON.stringify(this))
                console.log("this", this)
                return this.name
            }

}

User.getName(); // we are executing getName on User object, thus we are setting the context instead of global to User

// setTimeout(function (params) { //callback function
//     console.log(this)
// }, 1000) //in terms of milliseconds 1000 = 1sec


//sessionName = "Core Javascript";

// function test(params) {
//     //console.log(globalThis) //reserved this for node
//     console.log(this.sessionName) //accessing global value through global context
//     console.log(this) //is reserved keyword of javascript, tells us in what scope/context our code is executing
// }

// test()