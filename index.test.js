const { createShell } = require('./dist');
const shell = createShell({
  fs: require('fs'),
  os: require('os'),
  path: require('path'),
  util: require('util'),
  process: process,
  console: console,
});
console.log(shell.echo("hello!"));
console.log(shell.ls('-l', '*.ts'));
