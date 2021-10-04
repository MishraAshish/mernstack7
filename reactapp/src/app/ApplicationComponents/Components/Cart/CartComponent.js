import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComp";

import { saveCartToDb } from "../../../State/Cart/CartActions";

let CartComponent = (props)=>{

    //we are subscribing to cart state
    const CartList = useSelector((state)=>state.cartReducer);
    const User = useSelector((state)=>state.userReducer.user)

    const dispatchToSaveCart = useDispatch();

    //to be used in cart summary component
    let recalculate = (cartItems) => {
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    const clickToSaveCart = (cartlist, id)=>{
        if (!id) {
            alert("User not logged in! Please login to save")
        } else {
            dispatchToSaveCart(saveCartToDb(cartlist, id))
        }

    }
    //console.log("CartList ", CartList)
    return(
        <Fragment>
        <h1>Cart Component</h1>
        {
            CartList && CartList.length > 0 ? 
            <Fragment>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            {
                                props.readOnly ?  "" : 
                                    <Fragment>
                                        <th>Remove</th>
                                        <th>Edit</th>
                                    </Fragment>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CartList.map(item=>{
                                //return item.name
                                
                                return <CartItemComponent 
                                                item={item}
                                                key={item._id}
                                                readOnly = {props.readOnly}
                                    />
                            })
                        } 
                    </tbody>
                </table>

                <CartSummaryComponent data={recalculate(CartList)}/>
                
                {
                    props.readOnly ? "" : 
                        <React.Fragment>
                            <button onClick={() => clickToSaveCart(CartList,User._id)} >
                                    Save For Checkout
                            </button>
                            
                            <button onClick={() => props.history.push("/checkout")} >
                                Go To Checkout
                            </button>
                        </React.Fragment> 
                }

                </Fragment>
            :
            <h3>No Items Present in cart to display. Please select some items from Product Tab.</h3>
        }
        </Fragment>
    )
}

export default CartComponent;