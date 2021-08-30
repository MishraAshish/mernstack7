// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
 dog = "Woof",
 bird = "Chrip",
 lion = "roar";

let AnimalSoundES5 = {
    cat: cat,
    dog : dog,
    bird : bird,
    lion : lion
}


let AnimalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

console.log("animal sound ", AnimalSoundES5) // we use comma to auto cast object
console.log("animal sound from ShortHand ", AnimalSoundES6) // we use comma to auto cast object


//console.log("animal sound "+ AnimalSoundES6) // object in incorrect format

console.log("animal sound "+ JSON.stringify(AnimalSoundES6)) // to parse in to object type

module.exports = AnimalSoundES6;