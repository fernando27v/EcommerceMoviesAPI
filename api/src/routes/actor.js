const express = require("express");
const { getActors} = require("../controllers/actor");


const actorRouter = express.Router();

actorRouter.get("/",getActors);

module.exports = actorRouter;