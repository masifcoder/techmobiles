const express = require("express");
// const upload = require("../helpers/ImageUpload");

const userRouter = express.Router();
const  { Signup, Login, AdminLogin } = require("../controllers/user.controller");


userRouter.post("/signup", Signup);
userRouter.post("/login", Login);
userRouter.post("/admin-login", AdminLogin);


module.exports = userRouter;