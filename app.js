(function() {
	var express = require('express'),
		morgan = require('morgan'),
		swig = require('swig'),
		bodyParser = require('body-parser'),
		routes = require(__dirname + '/routes');

	var app = express();

	app.use(morgan('dev'));

	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	swig.setDefaults({ cache: false });

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	
	app.use(express.static(__dirname + '/public'));
	app.use(routes);

	var server = app.listen(3000, function() {
		console.log('server listening');
	});
})();