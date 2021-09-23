let express = require("express");
let router = express.Router({}), //router module only
UserDataModel = require("../DataModel/UserDataModel");

//user signin signup api
router.post("/api/signinup", (req, res)=>{ //localhost:9090/user/api/signinup
    console.log("data ", req.body); //user object that user creates entry

    UserDataModel.findOne({userName: req.body.userName}, (error, data)=>{
        if (error) {
            console.log("error sign in", error);
            res.send("Error Occurred");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {
            let userDataObject = new UserDataModel(req.body); //mapping data from req.body to schema

            userDataObject.save((err, newUserData)=>{ //error first callback
                if (err) {
                    console.log("error in sign up", error);
                    res.send("Error in sign up user");
                } else {
                    res.send(newUserData); //if user gets successfully created we will get the mongodb unique id
                }
            })
        }
    });

});

module.exports = router;