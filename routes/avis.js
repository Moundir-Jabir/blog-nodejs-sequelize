const express = require('express')
const router = express.Router()
const { getAvis } = require('../controllers/avisController')

router.get('/', getAvis)

module.exports = router