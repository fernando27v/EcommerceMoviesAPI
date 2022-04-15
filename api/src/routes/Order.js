const express = require("express");
const { post } = require("../controllers/Order/post");
const { get } = require("../controllers/Order/get");
const { clear } = require("../controllers/Order/clear");

const router = express.Router();

router.post("/", post);
router.get("/:userId", get);
router.get("/", get);
router.delete("/:userId", clear);

module.exports = router;
