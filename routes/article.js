const express = require('express')
const router = express.Router()
const { getarticles, create } = require('../controllers/articleController')

router.get('/', getarticles)
router.post('/', create)


module.exports = router