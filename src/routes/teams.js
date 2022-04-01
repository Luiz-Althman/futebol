const express = require("express");
const router = express.Router();
const TeamsController = require("../controllers/TeamController");

router.get("/teams", TeamsController.index);
router.post("/teams", TeamsController.create);
router.put("/teams/:id", TeamsController.update);
router.patch("/teams/:id", TeamsController.quickUpdate);
router.delete("/teams/:id", TeamsController.destroy);

module.exports = router;
