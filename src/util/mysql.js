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
  pool.query(
    `CREATE TABLE Blog(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Content TEXT NOT NULL)`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial table added successfully`);
    }
  );
  pool.query(
    `
    INSERT INTO Blog (Id, Title, Content) VALUES
    (1, 'My First Article', 'This is my 1st article.'),
    (2, 'Something interesting', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial data added successfully`);
    }
  );
};

module.exports = pool.promise();
