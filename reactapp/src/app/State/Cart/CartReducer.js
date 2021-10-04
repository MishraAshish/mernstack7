import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = []; //instead of objet in array we are directly putting array

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log("cart Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem


    switch(action.type) {
        
        case ActionTypes.ADD_ITEM:
            //checking for duplicate item with _id
            let newState = state.filter(item => item._id != action.payload.item._id);

            //checking if quantity is present or not, if no then add default quantity to 1 else do nothing 
            !action.payload.item["qty"] ? action.payload.item["qty"] = 1 : "";

            return [...newState, action.payload.item];//creating a new state with new item
    
        //empty cart
        case ActionTypes.EMPTY_CART:
            return [];
        
        //to select all the items except the one which we click to remove
        case ActionTypes.REMOVE_ITEM:
            return state.filter(item => item._id!=action.payload.id)

        case ActionTypes.UPDATE_ITEM:
            return state.map((item)=>{
                if (item._id == action.payload.id) { //update the qty of item we want to update with selected id
                    return {...item, qty:action.payload.qty}
                }
                return item;//for all other items in cart do not update anything
            })

        default :
            return state;
    }
}