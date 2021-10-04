import React from "react";

const CartSummaryComponent = (props)=>{
    let {
        count,
        amount
    } = props.data;


    return(
        <div>
            <p> Amount: {amount} </p>
            <p> Count: {count} </p>
        </div>
    )
}

export default CartSummaryComponent;