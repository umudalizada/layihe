const express = require("express")
const router = express.Router()
const ticketController=require("../controller/ticketController")
const userController=require("../controller/userController")
const reklamController=require("../controller/reklamController")


router.get("/reklams", reklamController.getAllReklam)
router.post("/reklams", reklamController.postReklam)
router.get("/reklams/:id", reklamController.getReklamById)
router.delete("/reklams/:id", reklamController.deleteReklamById)
router.patch("/reklams/:id", reklamController.patchReklamId)
router.put("/reklams/:id", reklamController.putReklamById)


router.get("/users", userController.getAllUser)
router.post("/users", userController.postUser)
router.get("/users/:id", userController.getUserById)
router.delete("/users/:id", userController.deleteUserById)
router.patch("/users/:id", userController.patchgUserId)
router.put("/users/:id", userController.putUserById)


router.get("/tickets", ticketController.getAllTicket)
router.post("/tickets", ticketController.postTicket)
router.get("/tickets/:id", ticketController.getTicketById)
router.delete("/tickets/:id", ticketController.deleteTicketById)
router.patch("/tickets/:id", ticketController.patchgTicketId)
router.put("/tickets/:id", ticketController.putTicketById)

module.exports = router