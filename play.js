const net = require("net");

const {connect} = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (input === 'i') {
    return process.stdout.write('Move: up');
  }
  if (input === 'j') {
    return process.stdout.write('Move: left');
  }
  if (input === 'k') {
    return process.stdout.write('Move: down');
  }
  if (input === 'l') {
    return process.stdout.write('Move: right');
  }
};

setupInput();