const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const removeSubString = require("./utils");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => res.send(removeSubString(req.body.text, req.body.subString)));

module.exports = port =>
  app.listen(port, () =>
    console.log(`server ${port - 3000} listening on port ${port}`)
  );
