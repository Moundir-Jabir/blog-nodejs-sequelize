const express = require('express')
const router = express.Router()
const { getAvis, createAvis } = require('../controllers/avisController')

router.get('/', getAvis)
router.post('/createAvis/:idPost', createAvis)

module.exports = router