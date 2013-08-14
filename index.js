// Helper function to set the height of a set of elements to the height of the tallest.
$.fn.equalizeHeights = function() {
	var maxHeight = this.map(function(i,e) {
		return $(e).height();
	}).get();

	return this.height( Math.max.apply(this, maxHeight) );
};

// Pulls "howMany" Dribbble shots for the user defined in DRIBBBLE_USERNAME. Also accepts an optional callback function with custom styling. function(imageUrl, url, title). Depends on equalizeHeights(). 
$.fn.dribbblesPlease = function(howMany, callback) {
	var self = this;
	var shots = [];

	$.ajax({
		url: "http://api.dribbble.com/players/" + DRIBBBLE_USERNAME + "/shots",
		dataType: 'jsonp',
		async: false,
		data: {page: 1, per_page: howMany},
		success: function(data) {
			for(var i = 0; i < data.shots.length; i++) {
				var current = data.shots[i];

				if(callback) {
					shots.push(callback(current.image_400_url || current.image_url, current.url, current.title));
				}
				else {
					shots.push(constructShot(current.image_400_url || current.image_url, current.url, current.title));
				}
			}

			function constructShot(imageUrl, url, title) {
				var output = "<li class='shot'>";
				output += "<a href='" + url + "'>";
				output += "<img src='" + imageUrl + "' title='" + title + "'>";
				output += "<div class='shot-title'>" + title + "</div></a></li>";
				return output;
			}

			function toString() {
				var output = "<ul>";
				for(var i = 0; i < shots.length; i++) {
					output += shots[i];
				}
				output += "</ul>";
				return output;
			}

			self.html(toString());
			$(".shot-title", self).equalizeHeights();
		}
	});
};