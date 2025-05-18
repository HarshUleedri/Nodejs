import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("<h1>About <a href='/contact-us'>contact Us</a></h1>");
  } else if (req.url === "/contact-us") {
    res.end("<h1>Contact Us <a href='/'>Home</a></h1>");
  } else {
    res.end(<h1>Not fount :( </h1>);
  }
});

server.listen(8000, () => console.log("server is running..."));
