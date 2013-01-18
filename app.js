var connect = require('connect');
var server 	= connect.createServer(connect.static(__dirname)).listen(4000);
var io 		= require('socket.io').listen(server);
var net		= require('net');

var dbUrl = "pixelcanvas";
var collections = ["locs"];
var db = require("mongojs").connect(dbUrl, collections);

// get their pixels
var listenserver = net.createServer(function(c) {
	c.on('data', function(data) {
		pixel = data.toString().split(',');
		px_x = parseInt(pixel[0]);
		px_y = parseInt(pixel[1]);
		px_color = pixel[2];
		
		if(/^#([a-f0-9]{6}|[a-f0-9]{3})$/i.test(px_color) && px_x >= 0 && px_y >= 0)
			db.locs.save({x: px_x, y: px_y, color: px_color});
		c.end();
	});
});
listenserver.listen(4001);

// give them their pixels!
io.sockets.on('connection', function (socket) {
	db.locs.find({}, function(err, locs) {
		locs.forEach(function(pixel) {
			socket.emit('pixel', pixel);
		});
	});
});
