const express = require('express');
const router = express.Router(),
AdminModel = require('../datamodel/AdminDataModel');

router.get('/saveuser',(req, res)=>{
    console.log(req.query); //make sure key's (fields) setup in query string are matched properly

    let AdminModelObject = new AdminModel(req.query);

    AdminModelObject.save((err, data)=>{ //all the callbacks are error first callbacks
        if (err) {
            console.log("err", err)
            res.send("There is an error while creating admin users")
        } else {
            console.log("data", data)
            res.json(data)
        }
    })
})

router.all('*', function (req, res) {
    res.send("This response is for all admin routes!")
})


module.exports = router;

// task :
// create an API to save student data using query string - keys are - name, age, address, session 
// and add another field ThingsToLearn for another call
// this will need a student data model, student router, etc