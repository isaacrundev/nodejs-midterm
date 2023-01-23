const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Blog'`;
pool.query(sql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  if (data.length === 0) {
    console.log(`Table 'Blog' doesn't exist`);
    seedDB();
  }
});

const seedDB = () => {
  pool.query(`DROP TABLE IF EXISTS Blog`);
  pool.query(`CREATE TABLE Blog(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Content TEXT)`);
};

module.exports = pool.promise();
