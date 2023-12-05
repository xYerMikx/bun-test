const http = require("http");

const posts = [
  { id: 1, title: "Post 1", content: "This is the first post." },
  { id: 2, title: "Post 2", content: "This is the second post." },
  { id: 3, title: "Post 3", content: "This is the third post." },
];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/posts") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(posts));
  } else {
    res.writeHead(404);
    res.end("404!");
  }
});

const port = 3008;
server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
