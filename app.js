(function() {
	var express = require('express'),
		morgan = require('morgan');

	var app = express();

	app.use(morgan('dev'));

	app.get('/', function(req, res) {
		res.send('Hello World!');
	});


	var server = app.listen(3000, function() {
		console.log('server listening');
	});
})();