module.exports = function (app) {
	app.get('/login', function(req, res) {
	  res.send('Hello login!');
	});

	app.get('/logout', function(req, res) {
	  res.send('Hello logout!');
	});

	app.get('/register', function(req, res) {
	  res.send('Hello register!');
	});
}