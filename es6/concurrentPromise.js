// when we make multiple promise calls and we want to check what happened to all of them 
// and then decide whats going to be the next step

let authentication = new Promise((resolve, reject)=>{ //authentication
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "authentication",
            "promise date" : (new Date).toDateString()
        })
    }, 3000);
})

let authorization = new Promise((resolve, reject)=>{ //authorization
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "authorization",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let getusercart = new Promise((resolve, reject)=>{ //getusercart
    // setTimeout(() => {
    //     resolve({
    //         "status" : 200,
    //         "msg" : "getusercart",
    //         "promise date" : (new Date).toDateString()
    //     })
    // }, 2000);
    
    setTimeout(() => {
        reject({
            "status" : 404,
            "msg" : "getusercart",
            "promise date" : (new Date).toDateString()
        })
    }, 2000);
})

console.log("Promise is working ...")

//settled either one or all
// Promise.all(
//     [authentication, 
//         authorization, 
//      getusercart]
//     ).then((data,err)=>{
//         console.log("then ", data)
//     }).catch((err)=>{
//         console.log("catch ",err)
//     }).finally((adta)=>{
//         console.log("Finally ", adta)
//     })


Promise.allSettled(
    [authentication, 
        authorization, 
     getusercart]
    ).then((data,err)=>{
        console.log("then ", data)
    }).catch((err)=>{
        console.log("catch ",err)
    }).finally((adta)=>{
        console.log("Finally ", adta)
    })

    //create promise of three concurrent sessions of a day and try to resolve and reject them