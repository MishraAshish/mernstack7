import React , { useState, Fragment } from "react";
import {useSelector, useDispatch } from "react-redux";

import { saveProduct} from "../../../State/Product/ProductAction";

let ProductComponent = ( props ) => {

    //initializes the name and returns a callback to save name on state change
    const [name, setName] = useState("Product Name"); 
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating"); 
    
    //const [{name, price}, updateObject] = useState({name : "Product", price :"25656"}); 
    //updateObject({name:"test", price:"2020020"})
    // this can be used at the event where we want to update the value when user make some change
    //setName("Updated Value") 
    
    // const HandleOnChange = (evt)=>{
    //     setName(evt.target.value)
    // }

    const saveProductDispatch = useDispatch();

    const saveProductClick = (evt)=>{
        let productObj = {name, price, desc, rating};

        alert("We are going to save this product - "+ JSON.stringify(productObj));

        saveProductDispatch(saveProduct(productObj))

        evt.preventDefault();
    }

    return(
        <Fragment>
            <h2> Products </h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            placeholder="Product Name" onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Product Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={(evt)=>setRating(evt.target.value)} />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                    </div>
                <br/>
            </section>
        </Fragment>
    )
}

export default ProductComponent;