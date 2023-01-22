const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Login_info'`;
pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  if (data.length === 0) {
    console.log(`Table 'Login_info' doesn't exist`);
  }
});
module.exports = pool.promise();
