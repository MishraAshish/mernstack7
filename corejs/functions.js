//functions : are the first class member citizens in javascript

//named function
function printName(params) {
    console.log(`Printing the name ${params}`)
};

printName("Robin"); //invocation of function

//create a sum function which take two parameters and returns sum of both the parameters

//IIFE - immediately invocable function expression
(function (params) {
    console.log(params)
})("Margi Patel")


printName("An Vu");


//nesting of functions 
//accessibility is from parent to child i.e- child can access anything present in parent function
function nameA(params) {

    function nameB(params) {

        function nameC(params) {
    
        }
    }    
}