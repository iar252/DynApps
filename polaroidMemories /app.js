var express = require('express');
var app = express();
var hbs = require('hbs');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir: './uploads/'});
var request = require('request');
var fs = require('fs');
//const multer = require('multer');
//const upload = multer({dest: './uploads'})
//const logger = require('morgan');
const bodyParser = require('body-parser')
var submitted = false;
var count = 0;

app.use(express.static('public'));
app.use(express.static('uploads'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.render('home');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/', function(req,res){
	submitted = true;
	if(submitted){
		res.redirect('template');
	}
})

app.get('/template', function(req,res){
	res.render('template');
})

app.post('/template', function(req,res){
	res.redirect('submitPic')
})

app.get('/submitPic', function(req, res){
	console.log('in submit')
	res.render('submitPic');
})

app.post('/submitPic',multipartMiddleware, (req,res)=>{
	const fileName = req.files.myFile.originalFilename;
	console.log('filename: ', fileName);
	const oldFilePath = req.files.myFile.path.split("/");
	console.log(oldFilePath);
	
	if(count != 4){
		count += 1
		oldFilePath[1] = 'file' + count + '.png';
		const newFilePath = oldFilePath.join("/")
		fs.rename(req.files.myFile.path, newFilePath, function(err){
			if(err) throw err;
		})
	}
	else{
		count = 0;
	}
})


app.listen(3000,function(){
	console.log("listening on port 3000");
})