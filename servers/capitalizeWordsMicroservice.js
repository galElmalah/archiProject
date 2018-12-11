const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const changeFirstLetterToUpperCase = (char, i) =>
  i === 0 ? char.toUpperCase() : char;

const capitalizeWord = word =>
  word
    .split("")
    .map(changeFirstLetterToUpperCase)
    .join("");

// capitalize every word
app.post("/", (req, res) =>
  res.send(
    req.body.text
      .split(" ")
      .map(capitalizeWord)
      .join(" ")
  )
);

module.exports = port =>
  app.listen(port, () =>
    console.log(`server ${port - 3000} listening on port ${port}`)
  );
