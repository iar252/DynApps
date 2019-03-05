console.log("the bot is starting up!");

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// })

function tweeting(){
	var tweet = "";
	var plants = ["🌵","🍄","🌱","🌴","🌳","🌿","🌷","🌾","🌹","🌻","🥀"];
	var animals = ["🦋","🐛","🐌","🐞","🕷","🦎","🐜"];

	const randPlant = Math.floor(Math.random()*plants.length);

	const randAnimal = Math.floor(Math.random()*animals.length);

	var randPair = [plants[randPlant],animals[randAnimal]];


	var firstRow = [" "," "," "," "," "," "];
	var secondRow = [" "," "," "," "," "," "];
	var thirdRow = [" "," "," "," "," "," "];
	var allRows = [firstRow, secondRow, thirdRow];

	const randTimes = Math.floor((Math.random()*firstRow.length)+1);

	for (let a = 0; a < allRows.length; a++){
		for (let i = randTimes; i > 0; i--){
			var randPos = Math.floor(Math.random()*firstRow.length);
			var randFromPair = Math.floor(Math.random()*2)
			allRows[a][randPos] = randPair[randFromPair];
		}
	}
	for (let i = 0; i < allRows.length; i++ ){
		tweet += allRows[i] + "\n";
		
	}
	

	var nextPost = {
		status: tweet
	}

	T.post('statuses/update', nextPost, function(err,data,response){
		console.log(tweet);
	})

}

setInterval(tweeting, 20000);

// setInterval is a built in function, takes in the function to call and the time
// tweeting is the name of my function and where the logic to concatenate the final tweet is. 
// within tweeting, there is an object called nextPost with the attribute status that refers to tweet which is my final street
// T.post will then refer to the nextPost object and post it as the status once it's connected with twitter's api

//callback to check if it tweeted
// T.post('statuses/update', tweet, didIttweet);

//     function didIttweet(err, data, response){
//         if (err){
//             console.log("it didn't work");
//         }else{
//             console.log("it worked!");
//         }
//     }

// };