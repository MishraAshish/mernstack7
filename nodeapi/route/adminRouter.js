const express = require('express');

const router = express.Router();

router.all('*', function (req, res) {
    res.send("This response is for all admin routes!")
})


module.exports = router;