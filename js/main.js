var game = {
    time: {
	    days: 0,
	    weeks: 0,
		months: 0,
		years: 0, 
		decades: 0,
		centuries: 0
	},
	images: {
	    eras: {
		    feudal: {
			    name: "Feudal Age",
				baby: "Image here",
				kid: "Image here",
				grownup: "Image here",
				adolescent: "Image here",
				adult: "Image here",
				oldadult: "Image here",
				grandpa: "Image here",
				death: "Image here"
			}
		}
	}
};

window.setInterval(function(){
    game.time.days++;
	document.getElementById('days').innerHTML = game.time.days;
}, 150);