const express = require('express')
const router = express.Router()
const { createComment, getCommentByPost } = require('../controllers/commentaireController')

// router.get('/:idPost', getCommentByPost)
router.post('/createComment/:idPost', createComment)

module.exports = router