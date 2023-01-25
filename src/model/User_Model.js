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

  static validate(username, password) {
    const sql = `SELECT * FROM Users WHERE Username = '${username}' AND Password = '${password}';`;
    return db.execute(sql);
  }
};
