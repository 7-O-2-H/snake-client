let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    setInterval(() => {
      connection.write('Move: up');
    }, 200);
  };
  if (key === 'a') {
    setInterval(() => {
      connection.write('Move: left');
    }, 200);
  };
  if (key === 's') {
    setInterval(() => {
      connection.write('Move: down');
    }, 200);
  }
  if (key === 'd') {
    setInterval(() => {
      connection.write('Move: right');
    }, 200);
  }
  if (key === 't') {
    connection.write('Say: Nommin');
  }
};

const setupInput = function (conn) {
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