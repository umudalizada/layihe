const Reklam= require("../models/reklamModel")

const getAllReklam=async (req, res) => {
	try {
        const reklam = await Reklam.find()
        res.status(200).send(reklam);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postReklam=async (req, res) => {
	try {
        const obj=req.body
        const newReklam=await Reklam(obj)
        newReklam.save()
        res.status(201).send(newReklam);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getReklamById=async (req, res) => {
	try {
        const reklam=await Reklam.findById(req.params.id)
        res.status(200).send(reklam);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteReklamById=async (req, res) => {
	try {
        const reklam=await Reklam.findByIdAndDelete(req.params.id)
        res.status(200).send(reklam);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchReklamId = async (req, res) => {
    try {
      const reklam=await Reklam.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(reklam);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putReklamById = async (req, res) => {
    try {
      const reklam=await Reklam.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(reklam);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {putReklamById,patchReklamId,deleteReklamById,getAllReklam,getReklamById,postReklam}