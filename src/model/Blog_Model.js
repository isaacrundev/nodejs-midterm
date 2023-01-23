const db = require("../util/mysql");

module.exports = class Blog {
  constructor(Title, Content) {
    this.Title = Title;
    this.Content = Content;
  }

  static find() {
    const sql = "SELECT * FROM Blog ORDER BY Id DESC";
    return db.query(sql);
  }
};
