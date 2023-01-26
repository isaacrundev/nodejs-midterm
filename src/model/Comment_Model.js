const db = require("../util/mysql");

module.exports = class Comment {
  constructor(Article_ID, Username, Comment) {
    this.Article_ID = Article_ID;
    this.Username = Username;
    this.Comment = Comment;
  }

  save() {
    const sql = `INSERT INTO Users (Username, Password) VALUES (?, ?, ?);`;
    const params = [this.Article_ID, this.Username, this.Comment];
    return db.execute(sql, params);
  }
};
