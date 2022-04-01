const express = require("express");
const router = express.Router();
const JogadoresController = require("../controllers/JogadoresController");

router.get("/jogadores", JogadoresController.index);
router.post("/jogadores", JogadoresController.create);
router.put("/jogadores/:id", JogadoresController.update);
router.patch("/jogadores/:id", JogadoresController.quickUpdate);
router.delete("/jogadores/:id", JogadoresController.destroy);

module.exports = router;
