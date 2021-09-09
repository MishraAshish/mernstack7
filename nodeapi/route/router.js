const express = require('express');

const router = express.Router(); //{caseSensitive:true}

router.get('/myname', function (req, res) {
    res.send("get name method!")
})

router.all('*', function (req, res) {
    res.send("This is the default response, from router map!")
})


module.exports = router;