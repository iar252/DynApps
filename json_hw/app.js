console.log("The server is running!")
//this code will allow you to add whatever you want to the json file
//you can check how many items you have
//you can also multiply two numbers and it will be stored in the json file

const express = require('express')
const app = express()
const server = app.listen(3000,listening);

function listening(){
	console.log("listening")
}

app.get('/add/:name/:value', addData);

app.get('/seeFile', viewData);

app.get('/total', getTotal);

app.get('/multiply/:num1/:num2', multiplyNums);

//readFileSync() -> the next line of code wont execute till this is done as opposed to readFile()
var fs = require('fs');
var data = fs.readFileSync('data.json')
//this is the raw data from the file, so I have to parse
//console.log(data)
var parsedData = JSON.parse(data)
//console.log(parsedData);

//parse and stringify
//parse is when we turn raw data to actual data and stringify is the opposite


function addData(req, res){
	var givenData = req.params;
	var name = givenData.name;
	var value = Number(givenData.value);
	//console.log("name: "+ name + " value: " + value);
	parsedData[name] = value;
	//console.log(parsedData);
	var writeData = JSON.stringify(parsedData, null, 2)
	fs.writeFile('data.json', writeData, done);

	function done(){
		console.log("done");
		res.send(name + " now has a value of " + value);
	}
}

function viewData(req, res){
	res.send(parsedData);
}

function getTotal(req, res){
	var itemsNum = JSON.stringify(parsedData).split(",").length-1
	var mssge = "Total Items "
	parsedData[mssge] = itemsNum;
	var writeData = JSON.stringify(parsedData, null, 2);
	fs.writeFile('data.json', writeData, done);
	function done(){
		res.send("Information has been added to the json file")
	}
	
}

function multiplyNums(req, res){
	var data = req.params;
	var num1 = data.num1;
	var num2 = data.num2;
	var mssge = num1 + " * " + num2 
	parsedData[mssge] = num1*num2;
	var writeData = JSON.stringify(parsedData, null, 2);
	fs.writeFile('data.json', writeData, done);
	function done(){
		res.send("The math is completed")
	}
}
