const fs = require("fs");
const path = require("path");

fs.readdir("./servers", (err, files) => {
  files.forEach((file, index) => {
    const pathToServer = path.join(__dirname, `servers/${file}`);
    const server = require(pathToServer);
    const initPort = 3000 + index;
    server(initPort);
  });
});
