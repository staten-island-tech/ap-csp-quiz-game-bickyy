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
})({"js/quizQuestion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quizQuestion = void 0;
var quizQuestion = [{
  img: "https://cdn.pixabay.com/photo/2019/04/04/15/52/hare-4103102_1280.jpg",
  number: "1",
  question: "Who invented the Chinese torture box?",
  Answer: "A. David Blaine B. David Copperfield C. Harry Houdini",
  a: "David Blaine",
  b: "David Copperfield",
  c: "Harry Houdini",
  correctAnswer: "c"
}, {
  img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  question: "What is Mario Bros daytime job?",
  number: "2",
  a: "Race Car Driver",
  b: "Teacher",
  c: "Plumber",
  correctAnswer: "c"
}, {
  img: "https://cdn.pixabay.com/photo/2018/11/25/19/13/tree-3838122_1280.jpg",
  question: "Who is Tim Burton?",
  number: "3",
  a: "Director",
  b: "Singer",
  c: "Actor",
  correctAnswer: "a"
}, {
  img: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  question: "Which is the name of the bird in the movie UP?",
  number: "4",
  a: "Karl",
  b: "Kevin",
  c: "Sam",
  correctAnswer: "b"
}, {
  img: "https://cdn.pixabay.com/photo/2017/08/27/18/10/shadow-2687048_1280.jpg",
  question: "How old was Michael Jackson when he died?",
  number: "5",
  a: "47",
  b: "55",
  c: "50",
  correctAnswer: "c"
}, {
  img: "https://cdn.pixabay.com/photo/2017/11/28/04/11/bear-2982809_1280.jpg",
  question: "Where does Pooh live?",
  number: "6",
  a: "A Tree",
  b: "A Mushroom",
  c: "A House",
  correctAnswer: "a"
}, {
  img: "https://images.unsplash.com/photo-1558679928-be7e02981a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  question: "How old is Rapunzel in the movie ‘Tangled’?",
  number: "7",
  a: "18",
  b: "15",
  c: "20",
  correctAnswer: "a"
}, {
  img: "https://images.unsplash.com/photo-1561628898-71993b042329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  question: "What year did ‘Thriller’ come out?",
  number: "8",
  a: "1980",
  b: "1982",
  c: "1988",
  correctAnswer: "b"
}, {
  img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  question: "Which game won the VGX award in 2013?",
  number: "9",
  a: "Grand Theft Auto V",
  b: "PubG",
  c: "League Of Legends",
  correctAnswer: "a"
}, {
  img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
  question: "Who played the character of Edward Scissorhands?",
  number: "10",
  a: "Johnny Depp",
  b: "Paul Newman",
  c: "Humphrey Bogart",
  correctAnswer: "a"
}];
exports.quizQuestion = quizQuestion;
},{}],"js/Dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  quizContainer: document.querySelector(".quiz-container"),
  resultContainer: document.querySelector(".result-container"),
  submitButton: document.querySelector(".submit-btn")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _quizQuestion = require("./quizQuestion");

var _Dom = require("./Dom");

var init = function init() {
  _quizQuestion.quizQuestion.forEach(function (item) {
    return _Dom.DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", "\n        <h4 class=\"item-image\">\n        <img\n            class=\"item-image\"\n            src=\"".concat(item.img, "\"\n            alt=\"\"\n        />\n        <h2 class= \"qan\">").concat(item.number, ". ").concat(item.question, "</h2>\n       \n        <h3 class= \"answer\">\n          <input type=\"radio\" id=\"").concat(item.a, "\"name=\"").concat(item.number, "\" value=\"").concat(item.a, "\">\n          ").concat(item.a, " \n        </h3>\n        <h3 class= \"answer\"> \n        <input type=\"radio\" id=\"").concat(item.b, "\"name=\"").concat(item.number, "\" value=\"").concat(item.b, "\">\n        ").concat(item.b, " \n        </h3>\n        <h3 class= \"answer\">\n        <input type=\"radio\" id=\"").concat(item.c, "\"name=\"").concat(item.number, "\" value=\"").concat(item.c, "\">\n        ").concat(item.c, " \n        </h3>\n        "));
  });

  var showResults = function showResults() {
    var score = 0;

    _quizQuestion.quizQuestion.forEach(function (question) {
      if (document.querySelector("input[name=\"".concat(question.number, "\"]:checked"))) {
        var radioValue = document.querySelector("input[name=\"".concat(question.number, "\"]:checked")).value;

        if (radioValue == "".concat(question.correct)) {
          score++;
          document.getElementById("".concat(question.number)).style.color = "green";
        } else if (radioValue != "Shawarma") {
          document.getElementById("".concat(question.number)).style.color = "red";
        }

        _Dom.DOMSelectors.resultContainer.innerHTML = "<h1>Your Score is ".concat(score, "/").concat(_quizQuestion.quizQuestion.length, "</h1>");
      }
    });
  };

  _Dom.DOMSelectors.submitButton.addEventListener("click", showResults);
};

init();
},{"./quizQuestion":"js/quizQuestion.js","./Dom":"js/Dom.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49501" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map