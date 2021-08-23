const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  conn.on('connection',()=>{
    console.log("connected")
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports={
  connect
}