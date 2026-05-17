import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import http from "http";

const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Wisp server running");
});

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(PORT, () => {
  console.log(`Wisp server listening on port ${PORT}`);
});