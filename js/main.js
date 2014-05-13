var game = {
    time: {
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

function born(){
    document.getElementById('image').innerHTML = game.images.eras.feudal.baby;
	document.getElementById('hiddenbutton').style.display = 'block';
	document.getElementById('timeinfo').style.display = 'block';
}
function liveWeek(){
    game.time.weeks++;
	if(game.time.weeks>=4){
	    game.time.weeks-=4;
		game.time.months++;
	}
	if(game.time.months>=12){
	    game.time.months-=12;
		game.time.years++;
	}
	document.getElementById('weeks').innerHTML = game.time.weeks;
	document.getElementById('months').innerHTML = game.time.months;
	document.getElementById('years').innerHTML = game.time.years;
}

function save(){
    
}