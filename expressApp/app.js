const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const request = require('request');
var apiKey = require('./config.js').apiKey;


//the file its using for css
app.use(express.static('public'))
//required if using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
app.get('/', function hello(req, res){
	res.render('index', {search: null, img: null, src_url: null, error: null})
});

app.post('/', function(req, res){
	const search = req.body.search
	console.log(search);
	const url = `https://www.food2fork.com/api/search?key=${apiKey}&q=${search}`
	console.log(url)
	request(url, function(err, response, body){
	if(err){
      res.render('index', {search: null, error: 'Error, please try again'});
    }
    else{
    	const search = JSON.parse(body);
    	console.log(search);
    	if (search.count !== 0){
	    	const rand = Math.floor(Math.random() * search.count) ;
	    	//console.log(rand)
	    	const img = search.recipes[rand].image_url;
	    	//console.log(img)
	    	let src_url =  search.recipes[rand].source_url
	    	const name = search.recipes[rand].title
	    	const publisher = search.recipes[rand].publisher
	    	//let result = ``;
	    	// for (let i = 0; i < 5; i ++){
	    	// 	result += search.recipes[i].title +'/n'
	    	// }
	    	let result = `${search.count} total recipes. Try this one today!`;
	    	res.render('index', {search: result, recipe_name: name, publisher: publisher, img: img, src_url: src_url, err:null});
    	}
    	else{
    		let result = `Sorry! We could not find recipes for that. Try another`;
    		res.render('index', {search: result, recipe_name: null, publisher: null, img: null, src_url: null,err: null});
    	}
    }
	});
})

app.listen(3000, function(){
    console.log('app is running on port 3000')
})
