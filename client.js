const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542 
  }
  
  );
  
  conn.on('connect', () => {
  console.log("Connected to the server")
  conn.write('Name: Leo');
  
})

  
  conn.setEncoding('utf8'); 

  return conn;
}  

module.exports = connect;
 


