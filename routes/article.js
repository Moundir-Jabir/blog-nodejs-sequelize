const express = require('express')
const router = express.Router()
const { getarticles, create, getArticlebyid, update } = require('../controllers/articleController')

router.get('/', getarticles)
router.post('/create', create)
//router.get('/:id', getArticlebyid)
router.post('/update/:id', update)


module.exports = router