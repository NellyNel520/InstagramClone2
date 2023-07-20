const Router = require("express").Router();

const controller = require("../controllers/PostController");


Router.get("/all", controller.GetAllPost);
Router.post("/new", controller.CreatePost);
Router.get("/byUserId/:user_id", controller.GetPostByUserId);
Router.get("/byId/:id", controller.GetPostById);
// need route protection
Router.put("/update/:id", controller.UpdatePost);
Router.delete("/:postId", controller.DeletePost);

module.exports = Router;
