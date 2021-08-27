// default params - are the parameter values that we set as default at the time of function definition

function sum(param1 = 0, param2 = 0) {
    // let param1_1 = param1 ? param1 : 0;
    // let param2_2 = param2 ? param2 : 0;
    //return param1_1 + param2_2;

    return param1 + param2;
}

console.log(sum(1, 5))