const http = require("http");
const fs = require("fs");
const url = require("url");
const port = process.env.PORT ||8000;

const sever = http
  .createServer((req, resp) => {
    if (req.url == "/favicon.ico") return resp.end();

    const log = `${Date.now()} : ${req.url} NEW Request Rec. \n `;

    const myUrl = url.parse(req.url , true);

    console.log(myUrl);

    const username = myUrl.query.username;

    fs.appendFile("log.txt", log, (err, data) => {
      switch (myUrl.pathname) {
        case "/":
          resp.end("it's index page, " + username);
          break;
        case "/home":
          resp.end("it's home page, " + username);
          break;
        case "/about":
          resp.end("it's about page, "+ username);
          break;
        default:
          resp.end("404 not found");
      }
    });
  })
  .listen(port, (req) => {
    console.log("sever start at port number -: " + port);
  });
