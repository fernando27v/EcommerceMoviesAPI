const express = require("express");
const { getGenres } = require("../controllers/genre/get");
const { postGenre } = require("../controllers/genre/post");
const { deleteGenre } = require("../controllers/genre/delete");
const { updateGenre} = require("../controllers/genre/put");

const router = express.Router();

router.get("/", getGenres);             //GET       http://localhost:3001/api/genres
router.get("/:id", getGenres);          //GET       http://localhost:3001/api/genres/12
router.put("/", updateGenre);           //PUT       http://localhost:3001/api/genres 
router.post("/", postGenre);            //POST      http://localhost:3001/api/genres
router.delete("/:id", deleteGenre);     //DELETE    http://localhost:3001/api/genres/12

module.exports = router;
