let express = require("express");
let router = express.Router({}),
ProductDataModel = require("../DataModel/ProductDataModel");

//product api's
router.post('/api/saveproduct',(req, res)=>{
    console.log("product data ", req.body);

    let productDataObject = new ProductDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    productDataObject.save((err, newProductData)=>{ //error first callback
        if (err) {
                res.send("Error in product saving");
        } else {
                res.send(newProductData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/getproducts',(req, res)=>{
    ProductDataModel.find((err, products)=>{ //error first callback
        if (err) {
                res.send("Error in getting products");
        } else {
                res.send(products);
        }
    })
})

module.exports = router;