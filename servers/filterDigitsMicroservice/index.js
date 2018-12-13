const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const filterDigits = require("./utils");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// filter digits
app.post("/", (req, res) => {
  res.send(filterDigits(req.body.text));
});

module.exports = port =>
  app.listen(port, () =>
    console.log(`server ${port - 3000} listening on port ${port}`)
  );
