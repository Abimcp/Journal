const Post = require("../models/Post");

async function index(req, res) {
  try {
    const post = await Post.all;
    console.log(post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function show(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ ...post });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { index, show };
