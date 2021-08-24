const Post = require("../models/Post");
const { post } = require("../server");

async function index(req, res) {
  try {
    const post = await post.all;
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ err });
  }
}