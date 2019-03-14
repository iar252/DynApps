console.log("the bot is starting up!");

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

function creatingTweet(){
	const array_max = 7;
	const array_min = 1;
	var post = "";
	var flower = ["🌹","🥀","🌺","🌸","🌼","🌻","🌷","🍎","🍊","🍋","🍇","🍅","🍓","🍒","🍑"];
	var animal = ["🐓","🦃","🕊","🐇","🐈","🐕","🐩","🐞","🦋","🐌","🐛","🐝","🦆","🐥","🐢","🐜","🦗","🕷","🦉","🐿","🦔"];
	var plant = ["🌱","🌿","🍀","🌾","🍃","🌳","🌵","🌴","🌲"];
	var synonym = ["big",
	"enceinte",
    "expectant",
    "gravid",
    "heavy",
    "large",
    "outstanding",
    "capital",
    "majuscule",
    "bang-up",
    "bully",
    "cracking",
    "dandy",
    "groovy",
    "keen",
    "neat",
    "nifty",
    "not bad",
    "old",
    "peachy",
    "slap-up",
    "smashing",
    "swell",
    "fantastic",
    "grand",
    "howling",
    "marvellous",
    "marvelous",
    "rattling",
    "terrific",
    "tremendous",
    "wondrous",
    "amazing",
    "awe-inspiring",
    "awesome",
    "awing",
    "astonishing"];

	

	randInt = function(item){
		return item[Math.floor(Math.random()*item.length)];
	}
	const randFlower = this.randInt(flower);
	const randAnimal = this.randInt(animal);
	const randPlant = this.randInt(plant);
	const randWord = this.randInt(synonym);

	monday = function(flower,plant,animal){
		post += plant.repeat(array_max-1) + animal + "\n";
		for (let i = 1; i < 6; i++){
			if (i==1 || i == 4 | i == 5){
				var line = plant + flower + plant.repeat(3) + flower + plant;
				post += line + "\n" 
			}
			else if (i == 2){
				var line = plant + flower.repeat(2) + plant + flower.repeat(2) + plant;
				post += line + "\n" 
			}
			else if (i == 3){
				var line = plant 
				for (let a = 0; a < 5; a++){
					if (a % 2 == 0){
						line += flower;
					}
					else{
						line += plant;
					}
				}
				line+= plant;
				post += line + "\n" 
			}

		}
		return post += plant.repeat(array_max)
	}

	tDay = function(flower,plant,animal){
		post += plant.repeat(array_max-1) + animal + "\n";
		
		for (let i = 0; i < 2; i ++){
			var line = plant + flower.repeat(5) + plant;
		}

		post += line + "\n";

		for (let i = 0; i < 5; i++){
			post += plant.repeat(3) + flower + plant.repeat(3) + "\n";
		}
	
		return post += plant.repeat(array_max) 
		
		
	}

	wednesday = function(flower,plant,animal){
		post += plant.repeat(array_max-1) + animal + "\n";
		for (let i = 0; i < array_max; i++){
			var line = plant + flower + plant.repeat(3) + flower + plant;
		}
		for (let i = 0; i < 3; i++){
			post += line + "\n";
		}
		var line = plant 
		for (let a = 0; a < 6; a++){
			if (a % 2 == 0){
					line += flower;
				}
				else{
					line += plant;
				}
		}
	
		post += line + "\n"

		var line = "";
		for (let i = 0; i < 7; i++){
			if( i == 2 || i == 4){
				line += flower;
			}
			else{
				line += plant;
			}
		}
		return post += line + "\n" + plant.repeat(array_max);
	}

	friday = function(flower,plant,animal){
		post += plant.repeat(array_max-2) + animal  + "\n";
		for (let i = 0; i < array_max-1; i++){
			var line = plant + flower.repeat(4) + plant;
		}
		post += line + "\n" + plant + flower + plant.repeat(4) + "\n" + plant + flower.repeat(3) + plant.repeat(2) + "\n";
		for (let i = 0; i < array_max-1; i++){
			var line = plant + flower + plant.repeat(4);
		}
		for (let i=0; i < (array_max-1)/3; i++){
			post+=line+"\n"
		}
		return post += plant.repeat(array_max-1);
	}
	
	sDay = function(flower,plant,animal){
		post += plant.repeat(array_max-2) + animal + "\n";
		post += plant.repeat(2) + flower.repeat(3) + plant +"\n";
		post += plant + flower + plant.repeat(4) + "\n";
		var line = "";
		for (let a = 1; a < 4; a++){
			if (a % 2 == 0){
				line += flower.repeat(2);
			}
			else{
				line += plant.repeat(2);
			}
		}
		post += line + "\n"
		post += plant.repeat(4) + flower + plant + "\n";
		post += plant + flower.repeat(3) + plant.repeat(2) + "\n";
		return post += plant.repeat(array_max-1);
		
		}

	quote = function(){
		if (randWord[0] == "a" || randWord[0] == "e" || randWord[0] == "i" || randWord[0] == "o" || randWord[0] == "u" ){
			return post += "\n" + "Have an " + randWord;
		}
		else{
			return post += "\n" + "Have a " + randWord;
		}
		
	}
	
 	

		var date = new Date();
		var day = date.getDay;
		switch(day) {
		  case 0:
		  	console.log(this.sDay(randFlower,randPlant,randAnimal) + this.quote());
		  	post += " Sunday!";
		    break;
		  case 1:
		    console.log(this.monday(randFlower,randPlant,randAnimal) + this.quote());
		    post += " Monday!";
		    break;
		  case 2: 
		  	console.log(this.tDay(randFlower,randPlant,randAnimal) + this.quote());
		  	post += " Tuesday!";
		  	break;
		  case 3: 
		  	console.log(this.wednesday(randFlower,randPlant,randAnimal) + this.quote());
		  	post += " Wednesday!";
		  	break;
		  case 4:
		  	console.log(this.tDay(randFlower,randPlant,randAnimal) + this.quote());
		  	post += " Thursday!";
		  	break;
		  case 5: 
		  	console.log(this.friday(randFlower,randPlant,randAnimal) + this.quote());
		  	post += " Friday!";
		  	break;
		  case 6: 
		  	console.log(this.sDay(randFlower,randPlant,randAnimal,day) + this.quote());
		  	post += " Saturday!";
		  	break;
		  default:
		  	console.log("Time is fake");
		}

	var tweet = {
		status: post
	}


	T.post('statuses/update', tweet, function(err,data,response){
		console.log("hi");
		console.log(post);
	})
}


//setInterval(creatingTweet, 86400000);

creatingTweet();
