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

  // static findById(id) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       // let postData = await db.query("SELECT * FROM post WHERE id = $1;", [
  //       //   id,
  //       // ]);
  //       let post = new Post({
  //         id: 2,
  //         title: "hahah",
  //         date: 2345,
  //         pseudonym: "egwerg",
  //         body: "gwerngoweurhgoiwjerg",
  //       });
  //       resolve(post);
  //     } catch (err) {
  //       reject("Post not found");
  //     }
  //   });
  // }
};
