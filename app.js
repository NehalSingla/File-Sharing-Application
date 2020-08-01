var express=require('express');
var express_session= require('express-session');
var app=express();
var path=require('path');
var ejs=require('ejs');


app

var user=require('/Models/userSchema');

//database Connection 

const mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/fileManagement';

mongoose.set('useFindAndModify', false);
mongoose.connect(mongoDB, {useNewUrlParser : true,useUnifiedTopology: true});

mongoose.connection.on('error', (err) => {
	console.log('DB connection error');
})

mongoose.connection.on('connected', (err) => {
	console.log('DB connected');
})






app.listen(3000,function()
{
	console.log('port listened at 3000');
});


