const express = require("express");
const app = express();

app.use(express.json());

const content =
  " hey this is test for node cicd backend for jenkins ci/cd implementation\n made some changes in code to test auto build";

app.get("/", (req, res) => {
  res.send(content);
});

app.listen(5004, () => {
  console.log("server listening on port : 5004");
});
