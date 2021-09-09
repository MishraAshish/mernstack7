console.log("First log in node api")

const express = require('express'); // imported express module or top level class of express
const port = 9090;
const app = express(); //by invoking top level class we are initilizing the application

const adminApp = express();

const router = express.Router();

app.use('/static', express.static('public')); // serve static files like images css using static middle ware

router.get('/call',(req, res)=>{
    res.send('This output is coming from call route')
})

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

//route params
app.get('/user/:id/details', (req, res)=>{ //http://localhost:9090/user/25/details
    let paramsObject = req.params;
    console.log("paramsObject ", paramsObject)
    paramsObject["id"] == 25 ?
    res.json({
        "status" : "success",
        "id":paramsObject["id"]
    }) : 
    res.json({
        "status" : "failure",
        "id":"no id is present"
    })
})

//returing a file but its not the correct way of sending a file in response, instead we should use static middleware
app.get('/GetJson', function (req, res) {
    res.sendFile(__dirname+"/package.json")
})

app.get('/Hi', function (req, res) {    
    res.send('I am new to nodemon World')
})

app.all('/html', function (req, res) {

    console.log(req)
    res.sendFile(__dirname+"/public/index.html")
})

app.use('/admin', adminApp);

//mounting of path
adminApp.get('/helloAdmin', (req, res)=>{

    res.json({
        "hi":"i am good, i am from admin app"
    })
})

// app.all('*', function (req, res) {
//     res.sendFile(__dirname+"/index.html")
// })

console.log(`we are listening on port ${port} with url http://localhost:9090`)

app.listen(port)

//ctrl+c to exit from loop

//create a new setup of nodeapi with express, create one api savestudent that takes values in query string 
//and saves it into a file and upon save success return the same data
//name,session, age, interestarea