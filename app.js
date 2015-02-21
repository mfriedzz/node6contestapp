var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var youTubeController = require('./controllers/youtube.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', indexController.index);

app.get('/view/:youtubeName', youTubeController.view);

app.post('/submitYouTube', youTubeController.submitYouTube);

var server = app.listen(7853, function() {
	console.log('Express server listening on port ' + server.address().port);
});
