import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
     products:[],
     defaultProduct : {
         name : "Product Name 2",
         price : 2,
         desc : "Product Description 2",
         rating : "Product Rating 2"
     }
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_PRODUCTS_TOSTORE:            
            return {...state, products:action.payload.productList};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}