console.log("the bot is starting up!");

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);


//data.status access to the status array 
// for loop to pull out text from each individual tweet
// refer to .text to get the actual text

//CODE
// T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
//     for (var i = 0; i<data.statuses.length; i++){
//     	console.log(data.statuses[i].text)
// }
// })

//POSTING
// T.post('statuses/update', { 
// 	status: 'I am tweeting from sublime ;p' 
// }, 
// function(err, data, response) {
//   console.log(data)
// })
 
// write a function that includes an array of tweets 
// randomly select a tweet from the array and we want to post on an interval
// could include a call back function inside T.post('statuses/update') to verify if the tweet posted



const tweets = (ts = ["cats and dogs", "i miss sleep", "milk and cookies would SLAP rn", "spiderverse is worth watching"]) => {
    const randomInd = Math.floor(Math.random()*ts.length);
    T.post('statuses/update', { status: ts[randomInd] }, function(err, data, response) {
        console.log(`posted ${ts[randomInd]}`);
      })
}
setInterval(tweets, 20000);
//ANOTHER WAY TO POST IN INTERVAL
