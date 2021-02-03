const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hai this is Yuga ! Welcome to Nodejs application");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
