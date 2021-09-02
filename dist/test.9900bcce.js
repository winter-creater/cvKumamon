// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n* \u9996\u5148\uFF0C\u9700\u8981\u753B\u718A\u672C\u718A\u7684\u8EAB\u4F53\n*/\n  .body {\n    width: 320px;\n    height: 240px;\n    background-color: black;\n  }\n  /*\n  * \u63A5\u4E0B\u6765\uFF0C\u753B\u718A\u672C\u718A\u7684\u773C\u775B\n  */\n  .eye {\n    border-radius: 50%;\n    width: 64px;\n    height: 64px;\n    background-color: white;\n  }\n  /*\n  * \u53F3\u773C\u5728\u53F3\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n  */\n  .eye.right {\n    transform: translateX(70px);\n  }\n  /*\n  * \u5DE6\u773C\u5728\u5DE6\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n  */\n  .eye.left {\n    transform: translateX(-70px);\n  }\n  /*\n  * \u7136\u540E\u52A0\u4E24\u4E2A\u773C\u73E0\u5B50\uFF0C\u5E76\u8BA9\u5B83\u52A8\u8D77\u6765\n  */\n  .eye::before { \n    height: 24px;\n    width: 10px;\n    background-color: black;\n    animation: blink 0.7s infinite;\n  }\n/*\n* \u753B\u7709\u6BDB\n*/\n  .eyebrow {\n    width: 36px;\n    height: 36px;\n    background-color: white;\n    \n  }\n  .eyebrow::before {   \n    width: 36px;\n    height: 36px;\n    background-color: black;\n  }\n  /*\n* \u628A\u7709\u6BDB\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n*/\n  .eyebrow.right {\n    transform: translateX(80px) rotate(18deg);\n  }\n  .eyebrow.left {\n    transform: translateX(-80px) rotate(-18deg);\n  }\n  /* \n * \u518D\u753B\u718A\u672C\u718A\u7684\u5C0F\u8138\u86CB\n  */\n  .face {\n    width: 80px;\n    height: 80px;\n    background-color: #ef2b2d;\n    position: absolute;\n  }\n  /*\n* \u628A\u5C0F\u8138\u86CB\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n*/\n  .face.right {\n    transform: translateX(140px);\n  }\n  .face.left {\n    transform: translateX(-140px);\n  }\n  /*\n  * \u753B\u718A\u672C\u718A\u7684\u62DB\u98CE\u8033\n  */\n  .ear {\n    width: 60px;\n    height: 60px;\n    background-color: black;\n    \n  }\n  /*\n  * \u628A\u8033\u6735\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n  */\n  .ear.right {\n    transform: translateX(130px);\n  }\n  .ear.left {\n    transform: translateX(-130px);\n  }\n  .ear::before {\n    width: 38px;\n    height: 38px;\n    background-color: white;\n   \n  }\n  .ear.right::before {\n    transform: translateX(-3px);\n  }\n  .ear.left::before {\n    transform: translateX(3px);\n  }\n  /* \n  * \u6700\u540E\uFF0C\u753B\u718A\u672C\u718A\u7684\u9F3B\u5B50\u548C\u5634\u5DF4\n  */\n  .noseAndMouse {\n    width: 160px;\n    height: 120px;\n    background-color: white;\n  }\n  .noseAndMouse .nose {\n    width: 50px;\n    height: 36px;\n    background-color: black;\n  }\n  .noseAndMouse .mouse {\n    width: 140px;\n    height: 30px;\n    background-color: black;\n  }\n  /*\n  * \u597D\u4E86\uFF0C\u8FD9\u53EA\u718A\u672C\u718A\u9001\u7ED9\u4F60\u5566\uFF01\n  */\n  ";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// debugger
console.log(_css.default);
var n = 1;
var code = document.querySelector('#code');
var style = document.querySelector('#style');
console.log(code);
code.innerText = _css.default.substr(0, n);
style.innerHTML = _css.default.substr(0, n);
console.log(n);

var timeCode = function timeCode() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
  }

  code.innerText = _css.default.substr(0, n);
  style.innerHTML = _css.default.substr(0, n); // console.log(n)

  code.scrollTop = code.scrollHeight;
};

var time = 50;
var id = setInterval(function () {
  timeCode();
}, time);

btnSlow.onclick = function () {
  window.clearInterval(id);
  time = 100;
  id = setInterval(function () {
    timeCode();
  }, time);
};

btnFast.onclick = function () {
  window.clearInterval(id);
  time = 10;
  id = setInterval(function () {
    timeCode();
  }, time);
};
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.9900bcce.js.map