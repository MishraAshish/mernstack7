import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../State/Product/ProductAction";

import DisplayProductDetails from "./DisplayProductDetails";

let DisplayProduct = (props)=>{

    //we need to make call to fetch products
    //like fetch we have axios it uses async and await
    const fetchProductsDispatch = useDispatch();

    const productList = useSelector((state)=>state.prodReducer.products)

    //componentDidMount : by initializing the parameters as dependency
    useEffect(()=>{
        fetchProductsDispatch(fetchProducts())
    },[])

    //console.log(productList);

    return(
        <>
            <h2>Below Products are available to select</h2>
            {productList && productList.length>0?
                productList.map((product)=>{
                    //return product.name
                    return <DisplayProductDetails product={product} key={product._id}/>
                }) :
                <h3>No products to display</h3>
            }
        </>
    )
}

export default DisplayProduct;