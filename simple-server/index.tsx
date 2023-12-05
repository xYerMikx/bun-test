const posts = [
  { id: 1, title: "Post 1", content: "This is the first post." },
  { id: 2, title: "Post 2", content: "This is the second post." },
  { id: 3, title: "Post 3", content: "This is the third post." },
];

const server = Bun.serve({
  port: 3005,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/posts") {
      const res = new Response(JSON.stringify(posts));
      res.headers.set("Access-Control-Allow-Origin", "*");
      res.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      return res;
    }
    return new Response("404!");
  },
});

console.log(`Listening on localhost:${server.port}`);
