const express = require("express");
const app = express();

app.use(express.json());

const content =
  " hey this is the test backend for jenkins ci/cd implementation";

app.get("/", (req, res) => {
  res.send(content);
});

app.listen(5004, () => {
  console.log("server listening on port : 5004");
});
