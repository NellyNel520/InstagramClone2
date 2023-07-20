const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/all", controller.GetAllUsers);
Router.get('/user/:id', controller.GetUser)
Router.get('/user/:email', controller.GetUserByEmail)
Router.get('/user/:username', controller.GetUserByUsername)
// need route protection
Router.put('/update/:userId', controller.UpdateUser)
Router.delete('/:userId',controller.DeleteUser)

module.exports = Router;