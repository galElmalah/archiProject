const fs = require("fs");
const path = require("path");

const promiseBasedReaddir = (path) => new Promise((resolve, reject) => {
  fs.readdir(path, (err, files) => {
    if (err) reject(err);
    resolve(files)
  })
});

promiseBasedReaddir('./servers').then( files => {
  files.forEach((file, index) => {
    const pathToServer = path.join(__dirname, `servers/${file}`);
    const server = require(pathToServer);
    const initPort = 3000 + index;
    server(initPort);
  });
}).catch(err => console.log(`error while starting the servers ${err}`));