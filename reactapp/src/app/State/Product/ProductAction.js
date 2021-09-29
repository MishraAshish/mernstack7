import * as ActionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
export const saveProduct = (product)=>{
    console.log("Product ", product);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/product/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While SAving Product", err)
        })
    }
};


export const fetchProducts = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/product/api/getproducts",{
            method: 'GET' //rest method type 
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("product save response ", productresp);
            //dispatch(loading(false));
            dispatch(addProductToStore(productresp));
        })
        .catch((err)=>{
            console.log("Error While SAving Product", err)
        })
    }  
}

export const addProductToStore = (productList)=>({
    type: ActionTypes.ADD_PRODUCTS_TOSTORE,
    payload: {productList}
})