const Router = require('express').Router()

const controller = require('../controllers/CommentController')
Router.post('/new', controller.CreateComment )
Router.get('/all', controller.GetAllComments)
Router.get('/findById/:comment_id', controller.GetCommentById)
Router.get('/findByPost/:post_id', controller.GetCommentByPostId)

// need route protection
Router.put('/update/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DestroyComment)
 
module.exports = Router