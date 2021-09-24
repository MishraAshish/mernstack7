const express = require('express'); // imported express module or top level class of express
const cors = require('cors'); //middleware :- cross origin resource sharing : 9092 not the same 9090
const port = 9090;
const app = express(); //by invoking top level class we are initilizing the application
const router = require('./route/router');
const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');

const adminApp = express();

app.use(cors());

app.use('/static', express.static('public')); // serve static files like images css using static middle ware
app.use(express.json({limit:'2mb', extended:false})); //json middle-ware for setting request content type

app.use('/admin', adminApp);
adminApp.use('/', adminRouter);

app.use('/user', userRouter); //redirecting all user api calls to user router
app.use('/', router); // all the requests coming to express app are routed to router.js

console.log(`we are listening on port ${port} with url http://localhost:9090`)
app.listen(port)