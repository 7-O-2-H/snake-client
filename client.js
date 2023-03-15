const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to server');
  });

  conn.on('data', (serverData) => {
    console.log(serverData);
  });

  conn.on("connect", () => {
    conn.write('Name:JJK'); // send to server type Name: JJK
  })

  // process.stdin.on('data', (userInput) => {
  //   client.write(userInput); // Send to server.
  // });

  return conn;
};

module.exports = {connect};