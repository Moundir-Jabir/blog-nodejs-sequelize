const express = require('express')
const router = express.Router()
const { getarticles, create, getArticlebyid, update , getPostsByCategorie} = require('../controllers/articleController')

router.get('/', getarticles)
router.post('/create', create)
//router.get('/:id', getArticlebyid)
router.post('/update/:id', update)
router.get('/getPostsByCategorie/:idCategorie', getPostsByCategorie)


module.exports = router