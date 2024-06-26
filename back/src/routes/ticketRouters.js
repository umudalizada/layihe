const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticketController");
const userController = require("../controller/userController");
const reklamController = require("../controller/reklamController");
const heroController = require("../controller/heroController");
const reservController = require("../controller/reservController");

// Reserv Routes
router.get("/reserv", reservController.getAllReserv);
router.post("/reserv", reservController.postReserv);
router.get("/reserv/:id", reservController.getReservById);
router.delete("/reserv/:id", reservController.deleteReservById);
router.patch("/reserv/:id", reservController.patchReservById);
router.put("/reserv/:id", reservController.putReservById);

// Hero Routes
router.get("/heros", heroController.getAllHero);
router.post("/heros", heroController.postHero);
router.get("/heros/:id", heroController.getHeroById);
router.delete("/heros/:id", heroController.deleteHeroById);
router.patch("/heros/:id", heroController.patchgHeroId);
router.put("/heros/:id", heroController.putHeroById);

// Reklam Routes
router.get("/reklams", reklamController.getAllReklam);
router.post("/reklams", reklamController.postReklam);
router.get("/reklams/:id", reklamController.getReklamById);
router.delete("/reklams/:id", reklamController.deleteReklamById);
router.patch("/reklams/:id", reklamController.patchReklamId);
router.put("/reklams/:id", reklamController.putReklamById);

// User Routes
router.get("/users", userController.getAllUser);
router.post("/users", userController.postUser);
router.get("/users/:id", userController.getUserById);
router.delete("/users/:id", userController.deleteUserById);
router.patch("/users/:id", userController.patchgUserId);
router.put("/users/:id", userController.putUserById);

// Ticket Routes
router.get("/tickets", ticketController.getAllTicket);
router.post("/tickets", ticketController.postTicket);
router.get("/tickets/:id", ticketController.getTicketById);
router.delete("/tickets/:id", ticketController.deleteTicketById);
router.patch("/tickets/:id", ticketController.patchgTicketId);
router.put("/tickets/:id", ticketController.putTicketById);

module.exports = router;
    