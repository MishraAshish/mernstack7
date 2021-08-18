//console.log("This is my first code in node js")

// var - is used to decalre identifiers of functional type

var firstValue = "An Vu";
console.log(firstValue);

console.log(`Type ${typeof firstValue}`);

firstValue = 101.10; //dynamic typing and dynamic casting which is present in javascript
console.log(firstValue);

console.log(`Type ${typeof firstValue}`);


firstValue = true;
console.log(firstValue);

console.log(`Type ${typeof firstValue}`);

firstValue = {}; //object in javscript
console.log(firstValue);

console.log(`Type ${typeof firstValue}`);

firstValue = undefined;
console.log(firstValue);

console.log(`Type ${typeof firstValue}`);

firstValue = null;
console.log(firstValue);

console.log(`Type ${typeof firstValue}`); //data type is object as null can not represent any data type

//console.log(globalThis)


//symbol data type -

mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);