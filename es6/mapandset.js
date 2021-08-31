//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of short hand methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, " hello world ")
myMap.set(keyObj, " star wars")
myMap.set(keyFunc, " microwave ")
myMap.set(keyNum, " twenty four")

console.log(myMap.get(keyFunc))
console.log(myMap.get(keyObj))

console.log(myMap.get(2000))
console.log(myMap.get('a string'))

//console.log(myMap.get({}))
//console.log(myMap.get(function() {}))

console.log(myMap.entries())
console.log(myMap.size)


console.log(myMap.set("twenty four", "reading some personal data"))
//console.log(myMap.set("twenty four", "reading some personal data")) //duplicates are not allowed

console.log(myMap.get("twenty four"))

console.log(myMap.delete(keyObj))
console.log(myMap.entries())


//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Robin","An","Margi","Myat","Saranya"]);

console.log(StudentSet.size)

console.log(StudentSet.has("Robin"))
console.log(StudentSet.has("chintan"))

StudentSet.add("Hung")
StudentSet.add("Myat") // duplicate values are not allowed

console.log(StudentSet.size)
console.log(StudentSet.keys())

StudentSet.add("Kim")
console.log(StudentSet.keys()) // this gets inserted

StudentSet.delete("Hung")
console.log(StudentSet.keys()) // this gets inserted