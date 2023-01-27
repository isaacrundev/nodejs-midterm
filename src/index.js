require("dotenv").config();
const express = require("express");
const sessions = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const port = process.env.PORT || 7777;
const app = express();
const dbconnection = require("./util/mysql");
const sessionTime = 10 * 1000 * 60;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: sessionTime },
  })
);

app.use("/", require("./routes/index"));
app.use("/posts", require("./routes/posts"));

app.listen(port, async () => {
  console.log(`Listening to port ${port}`);
  const [data] = await dbconnection.query("SELECT 1");
  if (data) {
    console.log("DB fetched Successfully");
  } else {
    console.log(`DB fetching Failed`);
  }
});
