import * as http from "http";
import * as os from "os";

const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    const hostname = os.hostname();
    console.log(`Requête reçue sur /ping depuis le serveur ${hostname}`);
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ headers: req.headers, hostname }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});