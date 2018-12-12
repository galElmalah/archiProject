const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const addDot = require("./utils");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/", ({ body: { text } }, res) => res.send(addDot(text)));

module.exports = port =>
  app.listen(port, () =>
    console.log(`server ${port - 3000} listening on port ${port}`)
  );
