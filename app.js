var express = require('express');
var app = express();

require('./routes/auth')(app);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.json({ "key": "valssue" });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});