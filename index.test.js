const { createShell } = require('./dist');

console.log('-- shell 1:')

const shell1 = createShell({
  fs: require('fs'),
  os: require('os'),
  path: require('path'),
  process: process,
  console: console,
});

console.log(shell1.ls('-lA', '.').stdout);

console.log('-- shell 2:')

const shell2 = createShell({
  fs: require('memfs'),
  os: require('os-browserify'),
  path: require('path-browserify'),
  process: require('process'),
  console: require('console-browserify'),
});

shell2.mkdir('-p', '/tmp');
shell2.mkdir('-p', '/app');
console.log(shell2.ls('-lA', '/').stdout);
