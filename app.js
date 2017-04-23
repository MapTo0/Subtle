var express = require('express');
var app = express();
var mongoose = require('mongoose');

require('./routes/auth')(app);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.json({ "key": "valssue" });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

mongoose.connect('mongodb://localhost/27017');

var db = mongoose.connection;

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name, 'wtffffff'); // 'Silence'