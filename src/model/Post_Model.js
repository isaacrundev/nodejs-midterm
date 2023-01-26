const db = require("../util/mysql");

module.exports = class Post {
  constructor(Title, Content) {
    this.Title = Title;
    this.Content = Content;
  }

  save() {
    const sql = `INSERT INTO Articles (Title, Content) VALUES (?, ?);`;
    const params = [this.Title, this.Content];
    return db.execute(sql, params);
  }

  static find() {
    const sql = "SELECT * FROM Articles ORDER BY Id DESC;";
    return db.query(sql);
  }
  static findById(id) {
    const sql = "SELECT * FROM Articles WHERE Id = ?;";
    return db.execute(sql, [id]);
  }
  static Update(Title, Content, Id) {
    const sql = "UPDATE  SET Title = ?, Content = ? WHERE (Id = ?);";
    const params = [Title, Content, Id];
    return db.execute(sql, params);
  }
  static Delete(id) {
    const sql = "DELETE FROM Articles WHERE Id = ?;";
    return db.execute(sql, [id]);
  }
};
