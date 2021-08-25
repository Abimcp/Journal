# LAP 2 Code Challenge

# Brief

- Your app should have a browser client allowing users to write a post with a title, a pseudonym and a body
- No login should be required to create a post or visit a post
- When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
- The user should be able to access their post using that show path even after a server restart
- Edit and delete functionality is not required

# Installation

### Installation

Clone or download the repo.
cd into server and run the following:
To run the app: `docker-compose-up`
This will run the api on localhost:3000

To stop the app and remove all resources: `docker-compose down --volumes --remove-orphans docker volume prune --force`

## Change Log

### .gitignore, api/controllers/post.js, api/dbconfig/dev_seeds.sql, api/dbconfig/init.js, api/dbconfig/seedDev.js, api/index.js, api/models/Post.js, api/package-lock.json, api/package.json, api/server.js

[x] Server Setup

### client/index.html, client/styles.css

[x] Basic terminal design of site

### client/front.js, client/index.html, client/post.html, client/styles.css

[x] front end js

### api/controllers/post.js, api/models/Post.js, api/routes/post.js

[x] Added posts creation

# Technologies used

- VScode
- GitHub
- Node
- Express
- Javascript
- Docker

# Wins and Challenges

## Wins

### Implementation of Docker

### Gaining a better understanding of the backend

## Challenges

### Linking files together correctly
