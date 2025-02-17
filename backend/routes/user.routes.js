const express = require("express");
// const upload = require("../helpers/ImageUpload");

const userRouter = express.Router();
const  { Signup, Login } = require("../controllers/user.controller");


userRouter.post("/signup", Signup);
userRouter.post("/login", Login);


module.exports = userRouter;