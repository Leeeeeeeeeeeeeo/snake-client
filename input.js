let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', (data) => {  
    handleUserInput(data)
  });
  return stdin;
}

const handleUserInput = function(input){
  if( input === '\u0003'){
    process.exit();
  }
  if(input === '\u0077'){
    connection.write('Move: up')
  }
  if(input === '\u0061'){
    connection.write('Move: left')
  }
  if(input === '\u0073'){
    connection.write('Move: down')
  }
  if(input === '\u0064'){
    connection.write('Move: right')
  }
  connection.write(`Say: Hi`)

} 

module.exports = setupInput;


