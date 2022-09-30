const express = require('express')
const router = express.Router()
const { getCategorie } = require('../controllers/categorieController')

router.get('/', getCategorie)

module.exports = router