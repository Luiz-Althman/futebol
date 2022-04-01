const express = require("express");
const router = express.Router();
const PositionsController = require("../controllers/PositionsController");

router.get("/positions", PositionsController.index);
router.post("/positions", PositionsController.create);
router.put("/positions/:id", PositionsController.update);
router.patch("/positions/:id", PositionsController.quickUpdate);
router.delete("/positions/:id", PositionsController.destroy);

module.exports = router;
