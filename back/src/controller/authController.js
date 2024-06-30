const userModel = require("../models/userModel")
const jwt= require("jsonwebtoken")

const loginController = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email: email });
      
      if (!user) {
          return res.status(404).json({ message: "User not found!" });
      }

      if (password !== user.password) {
          return res.status(403).json({ message: "Password incorrect!" });
      }

      const token = jwt.sign(
          {
              userId: user._id,
              email: user.email,
              username: user.username,
              name: user.name,
              lastname: user.lastname,
          },
          process.env.JWT_SECRET_KEY,
          {
              expiresIn: "1h",
          }
      );

      return res.status(200).json({ token });
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
};

  const registerController = async (req, res) => {
    try {
      const { name, lastname, username, email, password } = req.body;
  
      const controlUser = await userModel.findOne({
        $or: [{ email: email }, { username: username }]
      });
  
      if (controlUser) {
        res.status(409).json({ message: "User already exists!" });
        return;
      }
     
  
      const newUser = new userModel({
        name,
        lastname,
        username,
        email,
        password
      });
  
      await newUser.save();
      const token = jwt.sign(
        { email: newUser.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Server error!" });
        return;
    }
  };
 
  
  const resetPasswordController = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const resetToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ message: "Password reset email sent." });
    } catch (error) {
        console.error("Reset password error:", error);
        res.status(500).json({ message: "Failed to send reset email." });
    }
};

module.exports = {
    registerController,
    loginController,
    resetPasswordController,
};