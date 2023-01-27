const db = require("../util/mysql");

module.exports = class Post {
  constructor(Username, Title, Content) {
    this.Username = Username;
    this.Title = Title;
    this.Content = Content;
  }

  save() {
    const sql = `INSERT INTO Articles (Username, Title, Content) VALUES (?, ?, ?);`;
    const params = [this.Username, this.Title, this.Content];
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
    const sql = "UPDATE Articles SET Title = ?, Content = ? WHERE (Id = ?);";
    const params = [Title, Content, Id];
    return db.execute(sql, params);
  }
  static Delete(id) {
    const sql = "DELETE FROM Articles WHERE Id = ?;";
    return db.execute(sql, [id]);
  }
};
