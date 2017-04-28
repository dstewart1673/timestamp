const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/:time', (req, res) => {
  const timestamp = new Date(parseInt(req.params.time));
  const data = {};
  console.log(timestamp);

  if (isNaN(timestamp.getTime())) {
    data.unix = null;
    data.natural = null;
  } else {
    data.unix = timestamp.getTime();
    data.natural = timestamp.toDateString();
  };

  res.json(data);
})

app.listen(port, () => {
  console.log("server listening on " + port);
})
