const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, 'dist')));
app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
  console.log("error------"+req);
  res.sendFile(path.join(__dirname + '/dist/football/index.html'));
});
app.disable('etag');
  console.log("Console Log Listening");

