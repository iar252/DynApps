var express = require('express')
var app = express();
var hbs = require('hbs');
const bodyParser = require('body-parser');
const request = require('request');
var admin = require('firebase-admin');
var serviceAccount = require('./service_key.json');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://final-project252.firebaseio.com"
});

var db = admin.database();
var ref = db.ref('users');
var userInfo = {
	fname: "",
	lname: "",
	userName: "",
	pWord: ""
};

app.get('/', function (req, res){
	res.render('home');
});

app.post('/', function(req,res){
	userInfo.fname = req.body.fName;
	userInfo.lname = req.body.lName;
	userInfo.userName = req.body.userName;
	userInfo.pWord = req.body.pWord;
	ref.push(userInfo, done);
	function done(){
		res.redirect('/login');
	}
})

app.get('/login', function(req, res){
	res.render('login');
})

var ids = "";
var values = "";
var loggin_username = "";
var loggin_password = "";

app.post('/login', function(req, res, next){
	console.log("im here!!!");
	ref.on('value', getData, errData);
	function getData(data){
		var ids = data.val();
		var values = Object.values(ids);
		for (var i = 0; i < values.length; i++){
			var response = "";
			loggin_username = values[i].userName;
			loggin_password = values[i].pWord;
			if(loggin_password == req.body.pWord){
				if(loggin_username == req.body.userName){
					res.redirect('/index');
				}
			}
			else{
				response = `Wrong login! Please create an account`;
				res.render('home',{response:response});
			}
			// console.log(i);
			// console.log(values[i]);
		}

	}


})

app.get('/index', function (req, res){
	res.render('index');
});


function errData(){
	console.log("error?");
}



// var userInfo = {
// 	username: "ikrarashid",
// 	password: "hello"
// }

// ref.push(userInfo);

app.listen(3000, function(){
    console.log('app is running on port 3000')
})