const express = require('express')
const router = express.Router()
const { getarticles, create, getArticlebyid } = require('../controllers/articleController')

router.get('/', getarticles)
router.post('/create', create)
//router.get('/:id', getArticlebyid)



module.exports = router