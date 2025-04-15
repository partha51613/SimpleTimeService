const http = require('http');

const server = http.createServer((req, res) => {
  const timestamp = new Date().toLocaleString(); // As the timstamp format was not mentioned, I am using LocaleString()
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const responseData = {
    timestamp: timestamp,
    ip: ip
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(responseData, null, 2));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

