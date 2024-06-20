const User= require("../models/userModel")

const getAllUser=async (req, res) => {
	try {
        const user = await User.find()
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postUser=async (req, res) => {
	try {
        const obj=req.body
        const newUser=await User(obj)
        newUser.save()
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getUserById=async (req, res) => {
	try {
        const user=await User.findById(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUserById=async (req, res) => {
	try {
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgUserId = async (req, res) => {
    try {
      const user=await User.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putUserById = async (req, res) => {
    try {
      const user=await User.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllUser,getUserById,postUser,putUserById,patchgUserId,deleteUserById}