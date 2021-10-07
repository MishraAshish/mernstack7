import * as ActionTypes from "../actionTypes";//alias import  

const INITIAL_STATE ={  
    coupon : ""  
}  

export default function couponReducer(state=INITIAL_STATE, action) {  
    switch(action.type) {  
        
        case(ActionTypes.ADD_COUPON) :  
            console.log(state)  
            console.log(action.payload);  
            return {...state, coupon : action.payload};  
        
        default:  
            return state  
    }  
}