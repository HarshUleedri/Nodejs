import http from "http";

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.setHeader("content-Type", "text/html");
  // res.statusCode = 200;
  // res.statusMessage = "Good";

  // short hand for status (code, message, header)

  // res.writeHead(200, "Good", { "content-type": "text/html" });

  res.write("<h1>Hello world from harsh</h1>");
});

server.listen(8000, () => console.log("server is running ...."));
