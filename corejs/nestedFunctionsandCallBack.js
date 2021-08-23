// callback : when we pass a function as a parameter we call it as a callback function
var sessionName = "Vanila Javascript";

function Print(params) {
    console.log(`I am a printer ${JSON.stringify(params)} ${sessionName}`)
}

function GetDetails(name, age, address, callBack) {
    callBack({name, age, address})
}

function GetVehicle(name, Model, callBack) {
    callBack({name, Model})
}

GetDetails("Myat","21","Somewhere in US", Print)

GetVehicle("BMW","2021", Print)







// nested functions in do hold the scope of outerfunctions variables or properties
var e = 15;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}
// var sum2 = sum(1);
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
// console.log(result)

// var myFunc = sum(1)(2)(3)(4) //chain of execution