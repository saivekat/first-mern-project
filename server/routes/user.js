const express=require("express");
const { deleteUser,getAllUser } = require("../controller/user");
const Router=express.Router();

Router.delete("/:id",deleteUser);

Router.get("/me",getAllUser)

module.exports=Router;