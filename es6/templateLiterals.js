let animalSounds = require("./shortHand");

//below the ESC - backtick `

let dynVal = 2546;

// let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum";
// console.log(myNormalString)

let myNormalString = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
                      Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        ${JSON.stringify(animalSounds)}

                     Lorem Lipsum Lorem Lipsum Lorem Lipsum



                     Lorem Lipsum Lorem Lipsum Lorem Lipsum`;
console.log(myNormalString)