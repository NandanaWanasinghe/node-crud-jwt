const express = require("express");

const app = express();

app.get("/first-api", (req, res) => {
  let response = {
    name: "Nimna",
    age: 23,
    uni: "SLIIT",
  };
  return res.status(500).send(response);
});

app.listen(5000, () => {
  console.log("Server is run on port : 5000");
});
