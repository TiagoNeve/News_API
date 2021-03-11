var express = require('express')
var router = express.Router()


router.get('/', (req, res) => {
    res.send('The router is working')
})

module.exports = router