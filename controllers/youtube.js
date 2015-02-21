//youtube.js Controllers

var youTube = require('../models/youtuberesults.js');

var youTubeController = {


	view: function(req,res){
		// View Videos
		var findYouTube = youTube.getYouTubeVideoByTitle(req.params.youtubeName);
		//console.log(findYouTube);
		//res.render('youtube',{findYouTube: findYouTube});
		res.render('youtube', findYouTube);
	},

	submitYouTube: function(req, res){


		youTube.addVideo(
			req.body.name,
			req.body.urlvideolink,
			req.body.title,
			req.body.description
			);
		// Send user back to home page
		res.redirect('/');
	}

};

// Export our Controller Method(s)

module.exports = youTubeController;