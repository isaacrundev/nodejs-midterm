const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

const articlesDataSql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Articles';`;

pool.query(articlesDataSql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  if (data.length === 0) {
    console.log(`Table 'Articles' doesn't exist`);
    articlesSeedDB();
  }
});

const articlesSeedDB = () => {
  // pool.query(`DROP TABLE IF EXISTS Articles;`);
  pool.query(
    `
    CREATE TABLE Articles(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(16) NOT NULL,
    Title VARCHAR(100) NOT NULL,
    Content TEXT NOT NULL);
    `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Articles' table added successfully`);
    }
  );
  pool.query(
    `
    INSERT INTO Articles (Id, Username, Title, Content) VALUES
    (1, 'abc', 'My First Article', 'This is my 1st article.'),
    (2, 'test','Wanna see something interesting?', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Articles' data added successfully`);
    }
  );
};

const userDataSql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Users';`;

pool.query(userDataSql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  if (data.length === 0) {
    console.log(`Table 'Users' doesn't exist`);
    usersSeedDB();
  }
});

const usersSeedDB = () => {
  // pool.query(`DROP TABLE IF EXISTS Users;`);
  pool.query(
    `CREATE TABLE Users(
      Username VARCHAR(16) PRIMARY KEY,
      Password VARCHAR(16) NOT NULL);`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Users' table added successfully`);
    }
  );
  pool.query(
    `
    INSERT INTO Users (Username, Password) VALUES
    ('abc', '123'),
    ('test', 'ji32k7au4a83');
    `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Users' data added successfully`);
    }
  );
};

const commentDataSql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Comments';`;

pool.query(commentDataSql, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  if (data.length === 0) {
    console.log(`Table 'Comments' doesn't exist`);
    commentsSeedDB();
  }
});

const commentsSeedDB = () => {
  // pool.query(`DROP TABLE IF EXISTS Comments;`);
  pool.query(
    `CREATE TABLE Comments(
      Id INT PRIMARY KEY AUTO_INCREMENT,
      Article_ID INT NOT NULL,
      Username VARCHAR(16) NOT NULL,
      Comment CHAR(255) NOT NULL
      );`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Comments' table added successfully`);
    }
  );
  pool.query(
    `
    INSERT INTO Comments (Id, Article_ID, Username, Comment) VALUES
    (1, 1, 'abc', 'First comment'),
    (2, 2, 'test', 'Boo~');
    `,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Initial 'Comments' data added successfully`);
    }
  );
};

module.exports = pool.promise();
