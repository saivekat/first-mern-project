const express = require("express");
const { registerUser, loginUser } = require("../controller/auth"); 
const Router = express.Router();

Router.post("/register",registerUser);

Router.post("/login",loginUser);

module.exports = Router;
