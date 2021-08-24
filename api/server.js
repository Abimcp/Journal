const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const postRoutes = require('./routes/post')

// server.use('/post', postRoutes)

server.get('/', (req, res) => res.send('Welcome to Jour.nal'))

module.exports = server