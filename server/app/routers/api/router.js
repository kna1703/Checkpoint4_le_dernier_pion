const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gameRouter = require("./game/router");

router.use("/games", gameRouter);

const commentRouter = require("./comment/router");

router.use("/comments", commentRouter);

const userRouter = require("./user/router");

router.use("/users/", userRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
