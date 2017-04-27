const url = require('url');
const http = require('http');
const portIs = process.env.port || 8080;

const server = http.createServer((req, res) => {
  const call = url.parse(req.url, true);
  const path = decodeURI(call.pathname.slice(1));
  const data = {};
  const str = Date.parse(path);

  if (isNaN(str)) {
    data.unix = null;
    data.natural = null;
  } else {
    const nat = new Date(str);
    data.unix = str;
    data.natural = nat.toDateString();
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(portIs);
