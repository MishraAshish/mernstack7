// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

function resolveAfter2Seconds() {

    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved'
                    });
            }, 2000);

            setTimeout(() => {
                reject({
                    "statuscode" : 500,
                    "statusmsg" :'rejected'
                    });
            }, 2000);
    });
}


console.log("async Execution starts");

//loginuser : 

async function asyncCall() { //so interpreter will ask to create a new thread for this function to execute and will return on await
    console.log('calling async waiting call');

    await resolveAfter2Seconds()
        .then((data, err)=>{
            console.log("data", data)
            console.log("err", err)
        })
        .catch((data,err)=>{
            console.log("data", data)
            console.log("err", err)
        })
        .finally(()=>console.log("Finally!"));
    
    console.log('calling async waiting call - central');

    await resolveAfter2Seconds()
    .then((data, err)=>{
        console.log("data 2", data)
        console.log("err", err)
    })
    .catch((data,err)=>{
        console.log("data 2", data)
        console.log("err", err)
    })
    .finally(()=>console.log("Finally!"));

    console.log('calling async waiting call - ends');
}

asyncCall();

console.log("async Execution ends");


// use multiple promises example for authentication, authorization and getusercart to put in async and await