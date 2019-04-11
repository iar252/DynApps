const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const request = require('request');
var apiKey = require('./config.js').apiKey;
var signedUp = false; 

//the file its using for css
app.use(express.static('public'))
//required if using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

//readFileSync() -> the next line of code wont execute till this is done as opposed to readFile()
var fs = require('fs');
var data = fs.readFileSync('database.json')
//this is the raw data from the file, so I have to parse
var db = JSON.parse(data)


//login page
app.get('/', function (req, res){
	res.render('home');
})


app.post('/', function(req, res){
	db['First Name: '] = req.body.fName;
	db['Last Name: '] = req.body.lName;
	db['Username: '] = req.body.userName;
	db['Password: '] = req.body.pWord;
	signedUp = true
	var writeData = JSON.stringify(db, null, 2);
	fs.writeFile('database.json', writeData, done);
	function done(){
		res.redirect('/login');
	}

})

app.get('/login', function(req, res){
	res.render('login');
})

app.post('/login', function(req, res){
	var correctInfo = false
	var inputUsername = req.body.userName;
	var inputPword = req.body.pWord;
	if (signedUp){
		if(inputUsername == db['Username: ']){
			if(inputPword == db['Password: ']){
				correctInfo = true
			}
		}
	}
	if (correctInfo){
		res.redirect('/search');
	}
	else{
		res.redirect('/')
	}
})

app.get('/search', function(req, res){
	res.render('index')
})

app.post('/search', function(req, res){
	const search = req.body.search
	const url = `https://www.food2fork.com/api/search?key=${apiKey}&q=${search}`
	request(url, function(err, response, body){
	if(err){
      res.render('index', {search: null, error: 'Error, please try again'});
    }
    else{
    	const search = JSON.parse(body);
    	if (search.count !== 0){
	    	const rand = Math.floor(Math.random() * search.count) ;
	    	const img = search.recipes[rand].image_url;
	    	let src_url =  search.recipes[rand].source_url
	    	const name = search.recipes[rand].title
	    	const publisher = search.recipes[rand].publisher
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
