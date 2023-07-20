const { Post } = require('../models')

const GetAllPost = async (req, res) => {
  try { 
    const data = await Post.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    let id = req.params.id
    const data = await Post.findByPk(id)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetPostByUserId = async (req, res) => {
  try {
    const userId = req.params.user_id
    const data = await Post.findAll({ where: { userId: userId } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const postBody = {
      ...req.body
    }
    let postCreate = await Post.create(postBody)
    res.send(postCreate)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.postId)
    await Post.destroy({ where: { id: postId } })
    res.send({ message: `Deleted Post with an id of ${postId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostByUserId,
  GetAllPost,
  GetPostById,
  CreatePost,
  UpdatePost,
  DeletePost
}
