const db = require("../util/mysql");

module.exports = class Comment {
  constructor(Article_ID, Username, Comment) {
    this.Article_ID = Article_ID;
    this.Username = Username;
    this.Comment = Comment;
  }

  save() {
    const sql = `INSERT INTO Comments (Article_ID, Username, Comment) VALUES (?, ?, ?);`;
    const params = [this.Article_ID, this.Username, this.Comment];
    return db.execute(sql, params);
  }

  static find() {
    const sql = "SELECT * FROM Comments ORDER BY Id DESC;";
    return db.query(sql);
  }
  static findById(id) {
    const sql = "SELECT * FROM Comments WHERE Id = ?;";
    return db.execute(sql, [id]);
  }
};
