// for in loop - iterates over the property value

//for in loop  
let person = {fname:"John", lname:"Doe", age:25};  
 
for (x in person) {     
    //console.log(x);
    console.log(person[x]);
} 

console.log("Other Example") 

let arr = [3,5,7];
arr.foo = 10;
arr.bar = "BAZ";

console.log(arr);
//let i = 0;
for (const num in arr) {
    //if (arr.hasOwnProperty(num)) { //check to avoid breaks
        const element = arr[num];
        console.log(element);
        //i++;
        //console.log(i);
    //}
}
