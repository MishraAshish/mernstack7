import React, {useState} from "react";


let DisplayProductDetails = ({product})=>{

    const [showHide, showHideDetails] = useState(false);

    //console.log("render ", product);

    const handleClick = (evt) => {
        evt.target.classList.contains("product") ? 
                showHideDetails(!showHide) : "";
        //alert("handleClick ")
        evt.preventDefault();
    }

    const addProductToCart = (product)=>{
        alert("product "+ JSON.stringify(product))
        
    }

    return(
        <ul className={"product"}>
            <li className={"product"} onClick={handleClick}>
                {product.name}
                {showHide ?
                    <ul className={"productDetails"}>
                        <li>{product.desc}</li>
                        <li>{product.price}</li>
                        <li>{product.rating}</li>
                        <input type="button" className={"btn btn-primary col-md-2"} 
                            onClick={()=>addProductToCart(product)} value="Add To Cart" />
                    </ul> : 
                    " " }
            </li>
        </ul>
    )
}

export default DisplayProductDetails;