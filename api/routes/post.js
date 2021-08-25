const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/", postController.index);
router.get("/:id", postController.show);

module.exports = router;

// get post all
// get post by all date
// get post by id
