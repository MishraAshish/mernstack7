console.log("First log in node api")

const express = require('express'); // imported express module or top level class of express
const port = 9090;
const app = express(); //by invoking top level class we are initilizing the application

app.get('/', (req, res)=>{

    res.json({
        name : "Saranya",
        place : "Somewhere in world"
    })
})

app.get('/SaveUser', (req, res)=>{ //http://localhost:9090/SaveUser?name=testme&address=usa
    let queryObject = req.query;
    console.log("queryObject ", queryObject)
    res.json(queryObject)
})

app.get('/Hi', function (req, res) {
    res.send('I am new to nodemon World')
})

console.log(`we are listening on port ${port} with url http://localhost:9090`)

app.listen(port)

//ctrl+c to exit from loop

//create a new setup of nodeapi with express, create one api savestudent that takes values in query string 
//and saves it into a file and upon save success return the same data
//name,session, age, interestarea