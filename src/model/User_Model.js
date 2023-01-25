const db = require("../util/mysql");

module.exports = class User {
  constructor(Username, Password) {
    this.Username = Username;
    this.Password = Password;
  }

  save() {
    const sql = `INSERT INTO Users (Username, Password) VALUES (?, ?);`;
    const params = [this.Username, this.Password];
    return db.execute(sql, params);
  }

  static find() {
    const sql = "SELECT * FROM Users ORDER BY Id DESC;";
    return db.query(sql);
  }
  static findById(id) {
    const sql = "SELECT * FROM Users WHERE Id = ?;";
    return db.execute(sql, [id]);
  }
};
