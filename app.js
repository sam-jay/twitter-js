(function() {
	var express = require('express'),
		morgan = require('morgan'),
		swig = require('swig'),
		bodyParser = require('body-parser'),
		socketio = require('socket.io'),
		routes = require(__dirname + '/routes');

	var app = express();

	app.use(morgan('dev'));

	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	swig.setDefaults({ cache: false });

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	var server = app.listen(3000, function() {
		console.log('server listening');
	});
	var io = socketio.listen(server);

	app.use(express.static(__dirname + '/public'));
	var router = routes(io);
	app.use('/', router);

})();