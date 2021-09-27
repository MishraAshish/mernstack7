// reducers are used to generate new state on the basis of action raised
// no surprises just simple calculation

import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    user : {
        userName : "",
        password : "",
        street : "",
        mobile : 0,
        _id: ""
    }
}

let UserReducer = (previousState = INITIAL_STATE, action) => {

    switch (action.type) {        
        case ActionTypes.AddUserToStore:
            console.log("Adduser To Store Reducer", action)
            //we will create a new state using payload passed from user component and container
            //for every action dispatch reducer generates a new state
            //let newState = Object.assign(previousState);
            //newState.user = action.payload.user;

            //...prevState = {xState, user, prod} // replacing user with action.payload.user
            //best use of spread operator to preserve the immutability
            return {...previousState, user:action.payload.user}; //returns a new state
    
        default:
            return previousState;
    }
}

export default UserReducer;

//action - type (addusertostore) and payload (userobject)