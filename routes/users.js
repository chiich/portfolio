var express = require('express');
var fs = require('fs');
//var readStream = fs.createReadStream('public/docs/po3130k.txt');
// var writeStream = fs.createWriteStream('public/docs/bar.txt');
// readStream.pipe(writeStream);

var router = express.Router();

var employees = router.route(/^\/employees$/i);
var single_employee = router.route(/^\/employees\/(\d+)$/i);
var po3130k = router.route(/^\/po3130k$/i);

employees.get(function(req, res){
        // return list of employees
         res.writeHead(200);
         res.end('employee list');
});

single_employee.get(function(req, res){
	// return single employee based on id
	res.writeHead(200);
	res.end('a single employee');

});

po3130k.get(function(req, res){
	// display text file for Princess request: 2016-08-15

	res.writeHead(200, {'Content-Type':'text/plain'});
    readStream.on('data', function(data){
        var chunk = data.toString();

//        process.stdout.write(chunk);
        res.end(chunk);
    });

    readStream.on('end', function(){
        console.log();
   });

    readStream.on('error', function(error){
        console.error(error);
        res.end();
    });


});


router.get('/', function(req, res, next){

	res.writeHead(200);
	res.end('GBO GAN GBOM!');
});

/**
    res.writeHead(200, {'Content-Type':'text/plain'});
    readStream.on('data', function(data){
	var chunk = data.toString();

	process.stdout.write(chunk);
	res.end(chunk);
    });

    readStream.on('end', function(){
	console.log();
   });

    readStream.on('error', function(error){
	console.error(error);
	res.end();
    });
**/
/**
   console.log('Incoming request coming from: ' + req.url);
   var i = 2;
   res.writeHead(200, {'Content-Type': 'text/plain'});

    setTimeout(function(){
	fs.readFile(__filename, {encoding: 'utf8'}, function(error, contents){
	    if(error){
	   	console.error(error);
		return res.end();
	    }

	    console.log('sending response for ' + req.url);
	    res.end(contents);
	});

    }, 5000);

    while(i--){
    	console.log('Loop value: ' + i + '\r');
    }
   // res.send('respond with a resource');
**/

module.exports = router;
