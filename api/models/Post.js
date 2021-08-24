const db = require("../dbConfig/init");


module.exports = class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.date = data.date;
    this.pseudonym = data.pseudonym;
    this.body= data.body;
  }

  
    
  
