const express = require("express");
const { getGenres } = require("../controllers/genre/getGenres");
const { postGenre } = require("../controllers/genre/postGenre");
const { deleteGenre } = require("../controllers/genre/deleteGenre");
const { update } = require("../controllers/genre/putGenre");
const { getById } = require("../controllers/genre/getById");

const router = express.Router();

router.get("/", getGenres);
router.get("/:id", getGenres);
router.put("/", update);
router.post("/", postGenre);
router.delete("/:id", deleteGenre);

module.exports = router;
