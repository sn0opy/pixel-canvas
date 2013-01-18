# pixel-canvas

pixel-canvas is a small node.js project which provides the possibility to draw draw pixels on a canvas-element. 

### Installation
To download all necessary dependencies, simply run

    npm install
    
Or make sure the following packages are installed

- mongojs 
- connect
- socket.io

### Usage

Run the server with

    node app.js
    
Afterwards, you're able to connect to http://localhost:4000 to view the already added pixels.

To add new pixels, simply send the following command (via Telnet or Netcat) to http://localhost:4001 (TCP)

    10,10,#F00
    
This will set a pixel on x=10 y=10 and will set it's color to red. The connection terminates afterwards. Everyone's canvas will automatically update.

    
    

    

