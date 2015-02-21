// youtuberesult

// Underscore

var  _ = require('underscore');

//Define Youtube class to represent each video

var Youtube = function(name, urlvideolink, title, description){
	this.name = name;
	this.urlvideolink = urlvideolink;
	this.title = title;
	this.description = description;
};

// You Tube Videos to start with

var youtubevideos = [
	new Youtube("John Smith Funny Video", "http://www.msn.com", "FunnyVideo", "Very Very Funny Video by LL"),
	new Youtube("Lisa Funny Video", "http://www.lide.com", "NotFunnyVideo", "Not Funny Video by LOOL")

];

var getYouTubeVideoByTitle = function(title){
	// use Underscore Find method
	return _.find(youtubevideos, function(item){
		return title === item.title;
		});
};

var addYouTubeVideo = function(name, urlvideolink, title, description){
	// create new Instance of Video and push to array
	youtubevideos.push(new Youtube(name, urlvideolink, title, description));
}; // end of Add method

module.exports = {
	youtubevideos: youtubevideos,
	getYouTubeVideoByTitle: getYouTubeVideoByTitle,
	addYouTubeVideo: addYouTubeVideo
};