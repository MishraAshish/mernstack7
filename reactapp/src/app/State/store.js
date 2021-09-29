//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import userReducer from "./User/UserReducer";
import prodReducer from "./Product/ProductReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};


export default createStore(
    combineReducers({
        userReducer, //short-hand ->  used to replace userReducer : userReducer with only - userReducer
        prodReducer
    }),
    {}, //intial state for store states
    applyMiddleware(logger, thunk, promise) //middle wares tp used at various places like action.js
)


//redux -
//store - single source of truth (collection of all the states)
//actions - object {} //type (saveuser) and payload (userobject), actiontypes
//reducers - this is to create intial state and new state upon any ation getting dispatched
//dispather - to take action to store(reducer)
//action creator - html element with we raise the action

//react-redux -
//will use to get store in our react components so usage will in container

//redux thunk - as middleware
//to make call to server

//promise middle ware to use

//api's
// signinupuser api

//npm install react-redux redux redux-promise-middleware redux-thunk