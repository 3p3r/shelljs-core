const EMPTY_OBJECT = {};
let _fs = EMPTY_OBJECT;
let _os = EMPTY_OBJECT;
let _path = EMPTY_OBJECT;
let _process = EMPTY_OBJECT;
let _console = EMPTY_OBJECT;

class Globals {
  get fs() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
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
        return Reflect.get(_path, prop, receiver);
      },
    });
  }
  set path(v) {
    _path = v;
  }

  get process() {
    return new Proxy(EMPTY_OBJECT, {
      get(target, prop, receiver) {
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
        return Reflect.get(_console, prop, receiver);
      },
    });
  }
  set console(v) {
    _console = v;
  }
}

module.exports = new Globals();
