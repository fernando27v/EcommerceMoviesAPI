const express = require("express");
const {getActors} = require("../controllers/actors/getActors");
const {getActorById} = require("../controllers/actors/getActorById");
const {postActor} = require("../controllers/actors/postActor");

const actorRouter = express.Router();

actorRouter.get("/",getActors);
actorRouter.get("/:id",getActorById);
actorRouter.post("/",postActor);

module.exports = actorRouter;