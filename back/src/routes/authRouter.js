const express = require("express");
const authController = require("../controller/authController");
const authRouter = express.Router();

authRouter.post("/login", authController.loginController);
authRouter.post("/register", authController.registerController);

module.exports = authRouter;