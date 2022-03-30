const express = require("express");
const { getActors, getDetailActor } = require("../controllers/actor");


const actorRouter = express.Router();

actorRouter.get("/", async (req, res) => {
  const name = req.query.name;
  if(name){
    const actor = await getDetailActor(name);
    res.json(actor)
    return
  }
  const actors = await getActors();

  res.json(actors);
});

module.exports = actorRouter;