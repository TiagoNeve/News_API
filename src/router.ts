var express = require('express')
var router = express.Router()
var NewsController = require('./controller/NewsController')

const news = new NewsController;

router.get('/', (req, res) => {
    res.send('The router is working')
})

router.get('/news', news.show)

router.get('/news', news.search)

router.get('/news/:id', news.showId)

router.put('/news/:id', news.update)

router.post('/news', news.create)

router.delete('/news', news.deleteAll)

router.delete('/news/:id', news.deleteId)

module.exports = router