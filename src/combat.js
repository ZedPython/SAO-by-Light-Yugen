document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

let health = 100;
let dmg = 0;
let roll = 0;
let enemyhealth = 50;


Math.floor((Math.random() * 60) + 1);

let scan = document.querySelector("body");


scan.addEventListener('click', function(scan){
    if (scan.target.innerHTML === "Charge attack (60% chance)"){
    	roll = Math.floor((Math.random() * 100) + 1);
    	if (roll < 60){
    		dmg = Math.floor((Math.random() * 30) + 10);
    		enemyhealth=enemyhealth-dmg;
    		if (enemyhealth>0){
    			document.querySelector("#host .combatlog").innerHTML = `Hit! You hit the boar for ${dmg} dmg and it has ${enemyhealth} health remaining`;
    		}
    		else {
    			document.querySelector("#host .combatlog").innerHTML = `Enemy has been defeated!`;
    		}
    		

    	}
    	else {
    		dmg = Math.floor((Math.random() * 20) + 5);
    		health=health-dmg;
    		document.querySelector("#health strong").innerHTML = `Health: ${health}`;
    		if (health>0){
    			document.querySelector("#host .combatlog").innerHTML = `Miss! You were hit for ${dmg} dmg and have ${health} health left`;
    		}
    		else {
    			document.querySelector("#host .combatlog").innerHTML = `You are dead.`;
    		}
    		
    		
    	}
    }



});







});


