const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gameRouter = require("./game/router");

router.use("/games", gameRouter);

/* ************************************************************************* */

module.exports = router;
