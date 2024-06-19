const express = require("express")
const router = express.Router()
const ticketController=require("../controller/ticketController")




router.get("/ticket", ticketController.getAllTicket)
router.post("/ticket", ticketController.postTicket)
router.get("/ticket/:id", ticketController.getTicketById)
router.delete("/ticket/:id", ticketController.deleteTicketById)
router.patch("/ticket/:id", ticketController.patchgTicketId)
router.put("/ticket/:id", ticketController.putTicketById)

module.exports = router