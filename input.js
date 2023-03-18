const { clearInterval } = require("timers");

let connection;

let intervalID = null;
let moveHolder = null;
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  let move = null;
  
  if (key === 'w' && moveHolder !== 's') {
    move = 'Move: up';
    moveHolder = key;
  }
  if (key === 'a' && moveHolder !== 'd') {
    move = 'Move: left';
    moveHolder = key;
  }
  if (key === 's' && moveHolder !== 'w') {
    move = 'Move: down';
    moveHolder = key;
  }
  if (key === 'd' && moveHolder !== 'a') {
    move = 'Move: right';
    moveHolder = key;
    
  }
  if (key === 't') {
    connection.write('Say: Nommin');
  }
  if (move) {
    clearInterval(intervalID);
    intervalID = null;
    intervalID = setInterval(() => {
      connection.write(move);
    }, 90);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (userInput) => {
    handleUserInput(userInput);
  });
  return stdin;
};

module.exports = {setupInput};