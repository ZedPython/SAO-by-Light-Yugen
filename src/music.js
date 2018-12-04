document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    
//initial play
let currentsong = "none";

setInterval(tick, 500);
let audio;

function tick(){
	
	console.log(document.querySelectorAll("#host p")[1].id)

	if (document.querySelectorAll("#host p")[1].id == "main" && currentsong != "main" ) {
	
    	audio = new Audio('src/html/music/maintheme.mp3');
		audio.play();
		currentsong = "main";
	}

	if (document.querySelectorAll("#host p")[1].id == "floor1" && currentsong != "floor1") {
		
		audio.pause();
    	audio = new Audio('src/html/music/first town.mp3');
		audio.play();
		currentsong = "floor1"

	}	
	if (document.querySelectorAll("#host p")[1].id == "boar1" && currentsong != "boar1") {
		
		audio.pause();
    	audio = new Audio('src/html/music/fight.mp3');
		audio.play();
		currentsong = "boar1"

	}
	if (document.querySelectorAll("#host p")[1].id == "tavern1" && currentsong != "tavern1") {
		
		audio.pause();
    	audio = new Audio('src/html/music/tavern1.mp3');
		audio.play();
		currentsong = "tavern1"

	}
	if (document.querySelectorAll("#host p")[1].id == "market1" && currentsong != "market1") {
		
		audio.pause();
    	audio = new Audio('src/html/music/market1.mp3');
		audio.play();
		currentsong = "market1"

	}			
	
}






















  });



