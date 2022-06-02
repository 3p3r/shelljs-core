const globals = require('./src/globals');

export interface ICreateShellOpts {
  fs: typeof import('fs');
  os: typeof import('os');
  path: typeof import('path');
  process: typeof process;
  console: typeof console;
}

export const createShell = (opts: ICreateShellOpts): typeof import('shelljs') => {
  globals.fs = opts.fs;
  globals.os = opts.os;
  globals.path = opts.path;
  globals.process = opts.process;
  globals.console = opts.console;
  const shell = require('shelljs');
  return shell;
};
