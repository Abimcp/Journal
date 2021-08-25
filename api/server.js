const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/post");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/post", postRoutes);
server.get("/", (req, res) => res.send("Welcome to Jour.nal"));

module.exports = server;


