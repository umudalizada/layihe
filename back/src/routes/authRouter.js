const express = require("express");
const { loginController, registerController } = require("../controller/authController");

const AuthRouter = express.Router();

AuthRouter.post("/login", loginController);
AuthRouter.post("/register", registerController);

module.exports = AuthRouter;