let _fs = null;
let _os = null;
let _path = null;
let _util = null;
let _process = null;
let _console = null;
const EMPTY_OBJECT = {};
const assert = require('assert');

class Globals {
  get fs() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_fs, 'fs is not set. use .externals to set it.');
        return Reflect.get(_fs, prop, receiver);
      },
    });
  }
  set fs(v) {
    _fs = v;
  }

  get os() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_os, 'os is not set. use .externals to set it.');
        return Reflect.get(_os, prop, receiver);
      },
    });
  }
  set os(v) {
    _os = v;
  }

  get path() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_path, 'path is not set. use .externals to set it.');
        return Reflect.get(_path, prop, receiver);
      },
    });
  }
  set path(v) {
    _path = v;
  }

  get util() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_util, 'util is not set. use .externals to set it.');
        return Reflect.get(_util, prop, receiver);
      },
    });
  }
  set util(v) {
    _util = v;
  }

  get process() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_process, 'process is not set. use .externals to set it.');
        return Reflect.get(_process, prop, receiver);
      },
    });
  }
  set process(v) {
    _process = v;
  }

  get console() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
        assert.ok(_console, 'console is not set. use .externals to set it.');
        return Reflect.get(_console, prop, receiver);
      },
    });
  }
  set console(v) {
    _console = v;
  }
}

module.exports = new Globals();
