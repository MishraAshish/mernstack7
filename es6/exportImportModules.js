// export and import : ES6

// import {} from "./filepath/filename"

// default imports are done without {}
// name imports are done within {}

import printName, {Name, pie} from "/printName";
import {Name as newName} from "/UserName" //when we have conflict in imports

//importing everything from a file using *
import * as allExports from "/printName";
//allExports.Name
//allExports.pie

// default export - one in a file allowed
export default function printName(params) {
    
}

// named exports - these can be many
export let Name = "Robin";
export let pie = 3.141;

//UserName
export let Name = "Robin";


export let Constant = 91;
export let Coefficent = 25;

export function printDetails(params) {
    
}