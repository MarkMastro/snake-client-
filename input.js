const {
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY
} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(input)=>handleUserInput(input));
  
  return stdin;
};
const handleUserInput = function(input) {
  switch (input) {
  case '\u0003':
    console.log('ctrl+c pressed, exit');
    process.exit();
    break;
  
  case MOVE_UP_KEY:
    connection.write('Move: up');
    break;
  case MOVE_LEFT_KEY:
    connection.write('Move: left');
    break;
  case MOVE_RIGHT_KEY:
    connection.write('Move: right');
    break;
  case MOVE_DOWN_KEY:
    connection.write('Move: down');
    break;
  case 'l':
    connection.write('Say: My name is Mark');
    break;
  case 'b':
    connection.write('Say: I am Best!');
    break;
  }

 
};
module.exports = {setupInput};