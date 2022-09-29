const express = require('express')
const router = express.Router()
const { getarticles } = require('../controllers/articleController')
const { createArticle } = require('../controllers/articleController')


router.get('/', getarticles)
router.post('/', createArticle)


module.exports = router