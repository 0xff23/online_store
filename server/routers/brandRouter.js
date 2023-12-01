const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware("admin"), brandController.create);
router.get("/", brandController.getAll);
router.delete("/");

module.exports = router;
