const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send(`<h1>Aloha~</h1>`);
});

const port = process.env.PORT || 7777;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
