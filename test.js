var net = require('net');

var count = 5000;
var area_height = 100;
var area_width = 100;

for(var i = 1; i <= count; i++) {
	var x = Math.floor(Math.random() * area_width);
	var y = Math.floor(Math.random() * area_height);
	var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	
	client = net.connect({port: 4001}, function() { 	
		client.write(x + ','+ y + ',' + color);
	});
}
