const express = require('express')
const router = express.Router()
const { getCommentaires } = require('../controllers/commentaireController')

router.get('/', getCommentaires)

module.exports = router