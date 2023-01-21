const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const port = process.env.PORT || 7777;
const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
