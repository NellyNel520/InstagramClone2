const { Comment } = require("../models");
const { User } = require("../models")

const CreateComment = async (req, res) => {
  try {
    let data = await Comment.create(req.body)
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetAllComments = async (req, res) => {
  try {
    let data = await Comment.findAll()
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetCommentById = async(req,res)=>{
  try {
    const id = req.params.comment_id
    let data = await Comment.findByPk(id)
    res.send(data)
  } catch (error) {
    
  }
}

const GetCommentByPostId = async(req,res)=>{
  try {
    const postId = req.params.postId
    const data = await Comment.findAll({where:{postId:postId}})
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetCommentByUserId = async(req,res)=>{
  try {
    const userId = req.params.userId
    const data = await Comment.findAll({where:{userId:userId}})
    res.send(data)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let id = req.params.comment_id
    let updatedComment = req.body
    const data = await Comment.update({
      name:updatedComment.name,
      content:updatedComment.content,
      userId:updatedComment.userId,
      postId:updatedComment.postId
    },{where:{id:id}})
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const DestroyComment = async (req, res) => {
  try {
    let id = req.params.comment_id
    await Comment.destroy({where:{id:id}})
    res.send(`Deleted Comment with ID of ${id}`)
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  GetAllComments,
  UpdateComment,
  DestroyComment,
  GetCommentById,
  GetCommentByPostId,
  GetCommentByUserId
};
