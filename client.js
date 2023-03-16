const net = require("net");
const {IP, PORT} = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to server');
  });

  conn.on('data', (serverData) => {
    console.log(serverData);
  });

  conn.on("connect", () => {
    conn.write('Name:JJK'); // send to server 
  });

  return conn;
};

module.exports = {connect};