const net = require("net");
const {IP, PORT}=require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    ip: IP, // IP address here,
    port: PORT// PORT number here,
  });

  conn.on('connect',()=>{
    console.log("connected")
    conn.write("Name: MDM") 
    
    
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports={
  connect
}