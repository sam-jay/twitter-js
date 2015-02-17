(function() {
	var express = require('express'),
		morgan = require('morgan'),
		swig = require('swig');

	var app = express();

	app.use(morgan('dev'));

	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', process.cwd() + '/views');

	swig.setDefaults({ cache: false });

	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	app.get('/', function(req, res) {
		res.render( 'index', {title: 'Hall of Fame', people: people} );
	});


	var server = app.listen(3000, function() {
		console.log('server listening');
	});
})();