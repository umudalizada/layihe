const Hero= require("../models/heroModel")

const getAllHero=async (req, res) => {
	try {
        const hero = await Hero.find()
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postHero=async (req, res) => {
	try {
        const obj=req.body
        const newHero=await Hero(obj)
        newHero.save()
        res.status(201).send(newHero);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getHeroById=async (req, res) => {
	try {
        const hero=await Hero.findById(req.params.id)
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteHeroById=async (req, res) => {
	try {
        const hero=await Hero.findByIdAndDelete(req.params.id)
        res.status(200).send(hero);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgHeroId = async (req, res) => {
    try {
      const hero=await Hero.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(hero);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putHeroById = async (req, res) => {
    try {
      const hero=await Hero.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(hero);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllHero,postHero,putHeroById,patchgHeroId,deleteHeroById,getHeroById}