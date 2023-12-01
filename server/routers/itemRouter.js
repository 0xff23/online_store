const Router = require("express");
const router = new Router();
const itemController = require("../controllers/itemController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware("admin"), itemController.create);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getItem);

module.exports = router;
