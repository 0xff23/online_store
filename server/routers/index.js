const Router = require("express");
const router = new Router();
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const itemRouter = require("./itemRouter");

router.use("/type", typeRouter);
router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/item", itemRouter);

module.exports = router;
