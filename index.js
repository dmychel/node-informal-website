const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  // routing
  let path = "./src/pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "/contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });
});

server.listen("8080", "localhost", () => {
  console.log("listening for req on port 8080");
});
