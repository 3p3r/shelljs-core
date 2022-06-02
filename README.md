# shelljs-core

just the core logic of ShellJS without its dependency on native modules

## install

```bash
npm i shelljs-core
```

## usage

```JS
const { createShell } = require('shelljs-core');

console.log('-- shell 1:')
// shell instance working over local fs
const shell1 = createShell({
  fs: require('fs'),
  os: require('os'),
  path: require('path'),
  process: process,
  console: console,
});
console.log(shell1.ls('-lA', '.').stdout);

console.log('-- shell 2:')
// shell instance working over memfs
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
```
