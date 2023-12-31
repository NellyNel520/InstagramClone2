const { User } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const data = await User.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    const id = req.params.id
    let data = await User.findByPk(id)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUserByEmail = async (req, res) => {
  try {
    const email = req.params.email
    console.log(email)
    let data = await User.findOne({ where: { email: email } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log(email)
    let data = await User.findOne({ where: { id: id } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUserByUsername = async (req, res) => {
  try {
    const username = req.params.username
    console.log(email)
    let data = await User.findOne({ where: { username: username } })
    res.send(data)
  } catch (error) {
    throw error
  }
}


// only need in auth controller *move*
const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body
    }
    let newUser = await User.create(userBody)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.userId)
    const updatedUser = req.body
    let updateUser = await User.update(
      {
        name: updatedUser.name,
        userName: updatedUser.userName,
        email: updatedUser.email
      },
      { where: { id: id } }
    )
    res.send(updateUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.userId)
    await User.destroy({ where: { id: id } })
    res.send({ message: `Deleted user with an id of ${id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserByEmail,
  GetUserByUsername,
  GetUserById,
  GetAllUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser
}
