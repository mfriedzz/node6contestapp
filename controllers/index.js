var youTube = require('../models/youtuberesults.js');

var indexController = {
	index: function(req, res) {
		res.render('index', {
			youtubevideos: youTube.youtubevideos
		});
	}
	
};

module.exports = indexController;