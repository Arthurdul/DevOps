import * as http from "http"
const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
