let connection;

const setupInput = function(conn) {
  connection=conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(input)=>handleUserInput(input))
  
  return stdin;
}
const handleUserInput=function(input){
  switch (input){
    case '\u0003':
      console.log('ctrl+c pressed, exit')
      process.exit();
      break;
    case 'w':
      connection.write('Move: up')
      break;
    case 'a':
      connection.write('Move: left')
      break;
    case 'd':
      connection.write('Move: right')
      break;
    case 's':
      connection.write('Move: down')
      break;
    case 'l':
      connection.write('Say: Name Mark')
      break;
    case 'b':
      connection.write('Say: I am Best!')
      break;
  }

 
}
module.exports={setupInput}