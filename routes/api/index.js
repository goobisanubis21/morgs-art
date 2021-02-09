const router = require("express").Router()
const paintingRoutes = require("./paintings");

router.use("/paintings", paintingRoutes);

module.exports = router;