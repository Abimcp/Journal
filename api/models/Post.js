const db = require("../dbConfig/init");

module.exports = class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    // this.date = data.date;
    this.pseudonym = data.pseudonym;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query("SELECT * FROM posts;");
        let posts = postData.rows.map((b) => new Post(b));
        resolve(posts);
      } catch (err) {
        console.log(err);
        reject("Post not found");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query(
          `SELECT * FROM posts WHERE posts.id = $1;`,
          [id]
        );
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static async create(Data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, pseudonym, body } = postData;
        const result = await db.query(
          "INSERT INTO posts (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING id",
          [title, pseudonym, body]
        );
        resolve(result.rows[0]);
      } catch (err) {
        console.log(err);
        reject("Post could not be created");
      }
    });
  }
};
