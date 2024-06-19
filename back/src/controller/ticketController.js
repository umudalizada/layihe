const Ticket= require("../models/ticketModel")

const getAllTicket=async (req, res) => {
	try {
        const ticket = await Ticket.find()
        res.status(200).send(ticket);
    } catch (error) {
        res.status(500).send(error)
    }
}

const postTicket=async (req, res) => {
	try {
        const obj=req.body
        const newTicket=await Ticket(obj)
        newTicket.save()
        res.status(201).send(newTicket);
    } catch (error) {
        res.status(400).send(error)
    }
}

const getTicketById=async (req, res) => {
	try {
        const ticket=await Ticket.findById(req.params.id)
        res.status(200).send(ticket);
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTicketById=async (req, res) => {
	try {
        const ticket=await Ticket.findByIdAndDelete(req.params.id)
        res.status(200).send(ticket);
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchgTicketId = async (req, res) => {
    try {
      const ticket=await Ticket.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(ticket);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putTicketById = async (req, res) => {
    try {
      const ticket=await Ticket.findOneAndReplace({_id:req.params.id}, req.body)
      res.status(200).send(ticket);
    } catch (error) {
      res.status(400).send(error)
    }
  };

module.exports= {getAllTicket,getTicketById,postTicket,patchgTicketId, deleteTicketById,putTicketById}