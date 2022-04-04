const express = require("express");
const {getActors} = require("../controllers/actors/getActors");
const {getActorById} = require("../controllers/actors/getActorById");

const actorRouter = express.Router();

actorRouter.get("/",getActors);
actorRouter.get("/:id",getActorById);

module.exports = actorRouter;