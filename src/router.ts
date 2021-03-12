var express = require('express')
var router = express.Router()
var NewsController = require('./controller/NewsController')

const news = new NewsController;

router.get('/', (req, res) => {
    res.send('The router is working')
})

router.get('/news', news.show)

router.post('/news', news.create)

module.exports = router