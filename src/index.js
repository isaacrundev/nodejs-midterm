require("dotenv").config();
const express = require("express");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const port = process.env.PORT || 7777;
const app = express();
const dbconnection = require("./util/mysql");
const oneDay = 1000 * 60 * 60 * 24;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(
  sessions({
    secret: "aloha",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: oneDay },
  })
);

app.use("/", require("./routes/index"));
app.use("/main", require("./routes/main"));

app.listen(port, async () => {
  console.log(`Listening to port ${port}`);
  const [data] = await dbconnection.query("SELECT 1");
  if (data) {
    console.log("DB fetched Successfully");
  } else {
    console.log(`DB fetching Failed`);
  }
});
