const router = require("express").Router()
const bookRoutes = require("./paitnings");

router.use("/paintings", paitingRoutes);

module.exports = router;