// call : in function if we need to set the context to any specfic object we use the method from function
// it immediately changes the context and executes the function

//name = "Myat";
//var age = 23;

var User1 = { //object literal
                name : "Margi",
                age : 24,
                street : "Somewhere in atlanta"
            }

var User2 = {
                name : "Robin",
                age : 22,
                street : "Somewhere in egypt"
            }

function GetName(idNo, street) {
    console.log(`Name : ${this.name}`)
    //console.log(`idNo : ${idNo}`)
    console.log(`street : ${street}`)
}

function GetAge(idNo, street) {
    console.log(`Age : ${this.age}`)
    console.log(`idNo : ${idNo}`)
    //console.log(`street : ${street}`)
}

GetName.call(User1, "20111", "new york 6th street") // attaches the object as context (this) and executes the function immeditely
GetAge.call(User1, "20112", "new york 6th street")


GetAge.call(User2, "2151", "california 6th street")
GetName.call(User2, "25645", "ca 6th street")

//apply : in function if we need to set the context to any specfic object we use the method from function
// it immediately changes the context and executes the function
// we supply number of parameters in the form of array

function GetDetailsVehicle(name, model, price, onRoadPrice, color) {

    console.log(`Name : ${name}`)
    console.log(`Model : ${model}`)
    console.log(`price : ${price}`)
    console.log(`onRoadPrice : ${onRoadPrice}`)
    console.log(`Color : ${color}`)
    
    console.log(`Brand : ${this.Brand}`)    
    console.log(`Mileage : ${this.Mileage}`)    
    console.log(`Fuel Type : ${this.FuelType}`)    
}

var BMW = {Brand : "BMW", Mileage : "Low",  FuelType : "Electric"}

GetDetailsVehicle.apply(BMW,["Electric",2021, 2000, 2200, "red"])