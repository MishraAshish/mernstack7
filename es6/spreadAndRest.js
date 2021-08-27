//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays

function add(x = 0,y = 0, z = 0){
    return x+y+z;
}

let array = [5,6,8];

console.log(add(...array)); //es6
console.log(add.apply(null, array)) //es5


// function(a, b, ...arr) = rest parameters
//rest parameter : are the last parameters received in array

function addRest(...arr){ //[5,6,8]
    let sum = 0;

    sum = arr.reduce((prevVal, currenValue, index)=>{
                console.log("index "+ index);
                console.log("Prev Val "+prevVal +"  Current Val "+currenValue)
                
                return prevVal + currenValue
            },0)

    return sum;
}

console.log(addRest(...array))

//please create a function to add values from 1 to 999 (n), using rest and spread