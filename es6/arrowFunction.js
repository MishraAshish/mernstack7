//Two About arrow function : ()=> , also termed as fat arrow function

//1. a shorter syntax to write a function

// function PrintValue(value) {
//     console.log(value)
// }
// PrintValue("An vu");

let PrintArrow = (value) => console.log(value);
PrintArrow("Robin");

let Sum = (a = 1, b = 1) => a+b;
console.log(Sum(5,6))

let SumName = (a = 1, b = 1) => { 
                        return a+b > 10 ? "Saranya" : "Myat"
                    };
console.log(SumName(5,1))

//2. arrow function resolves the problem of "this" the context : by copying the context of immediate parent

let User = {
    name : "Margi",
    age : 21,
    getName : function () {
                console.log("this "+ this.name)

                // setTimeout(function() { //this represents the context (object) and is dynamic in nature
                //     console.log("this - inside settimeout "+ this.name)
                // }, 1000)

                // setTimeout(function() { //this represents the context (object) and is dynamic in nature
                //     console.log("this - inside settimeout "+ this.name)
                // }.bind(this), 1000)

                setTimeout(() => { //this copies the context of immediate parent - getName
                    console.log("this - inside settimeout "+ this.name)
                }, 1000)

                return this.name
            }

}

User.getName(); 