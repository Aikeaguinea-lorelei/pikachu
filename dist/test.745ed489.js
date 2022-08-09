// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = '\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before{box-sizing: border-box;}\n*::after{box-sizing: border-box;}\n.skin{\n    position: relative;\n    background: #ffe600;\n    height: 100vh;\n}\n/* \u5706\u548C\u4E09\u89D2\u7EC4\u6210\u9F3B\u5B50 */\n.nose{\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    top: 145px;\n    /* \u8BA9\u9F3B\u5B50\u79FB\u52A8\u5230\u6B63\u4E2D\u95F4(\u4E0A\u9762\u662F\u9760left\u5B9A\u4F4D\u7684,\u6240\u4EE5margin\u4E5F\u5E94\u8BE5\u8BBEleft) */\n    /* \u503C\u4E3A\u8D1F,\u5927\u5C0F\u662Fwidth\u7684\u4E00\u534A */\n    margin-left: -10px;\n    /* \u628A\u9F3B\u5B50\u7684\u56FE\u5C42\u653E\u9876\u5C42(\u6570\u503C\u8D8A\u5927,\u8D8A\u9876\u5C42) */\n    z-index: 10;\n}\n/* hover\u4E0A\u53BB\u7684\u65F6\u5019\u9F3B\u5B50\u4F1A\u52A8 */\n@keyframes wave{\n    0%{\n        /* \u9ED8\u8BA4\u72B6\u6001\u65F6,\u4E0D\u6643 */\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    /*\u65E0\u9650\u6B21\u7684\u52A8,\u6BCF\u6B21\u52A8\u7684\u65F6\u95F4\u4E3A1\u79D2*/\n    animation: wave 300ms infinite;\n    /* \u52A8\u7684\u8F74\u5FC3 */\n    transform-origin: center bottom;\n}\n.yuan{\n    position: absolute;\n    /*\u8C03\u6574\u957F\u65B9\u5F62\u5927\u5C0F\u548C\u4F4D\u7F6E,\u628A\u5B83\u653E\u5728\u4E09\u89D2\u5F62\u6B63\u4E0A\u65B9*/\n    width: 20px;\n    height: 6px;\n    /*border: 1px solid green;*/\n    top: -16px;\n    left: -10px;\n    /*\u7ED9\u957F\u65B9\u5F62\u4E0A\u4E0B\u8BBE\u7F6E\u4E0D\u540C\u7684border-radius,\u4EE5\u53D8\u6210\u5706\u5F27*/\n    border-radius: 10px 10px 0 0;\n    background: black;\n}\n.eye{\n    border:2px solid #000 ;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius:50%;\n}\n/* \u7528\u4F2A\u5143\u7D20\u8BBE\u7F6E\u773C\u775B\u9AD8\u5149 */\n.eye::before{\n    content:\'\';\n    border: 2px solid #000;\n    width: 32px;\n    height: 32px;\n    /*\u4E3A\u4E86\u8BA9\u5B83\u6709\u5BBD\u5EA6:\u5B9A\u4F4D\u8981\u7528block*/\n    display: block;\n    background: #fff;\n    border-radius: 50%;\n    /* \u7528\u5B9A\u4F4D\u5FAE\u8C03\u9AD8\u5149\u4F4D\u7F6E,\u7EDD\u5BF9\u76F8\u5BF9\u90FD\u53EF\u4EE5 */\n    position: relative;\n    left: 8px;\n    top: 2px;\n}\n.eye.left{\n    /*\u8868\u793A\u5411\u5DE6\u5E73\u79FB100*/\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.mouth{\n    /* border: 1px solid ; */\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    top: -10px;\n    z-index: 2;\n}\n.mouth .up .lip{\n    background: #ffe600;\n}\n.mouth .up .lip.left{\n    border:3px solid black;\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 0 50px;\n    border-top-color: transparent;\n    border-right-color: #ffe600;\n    /*\u628A\u505A\u51FA\u6765\u7684\u5DE6\u4E0A\u5DF4\u65CB\u8F6C*/\n    transform: rotate(-15deg);\n}\n.mouth .up .lip.right{\n    border:3px solid black;\n    height: 30px;\n    width: 100px;\n    border-radius: 0 0 50px 0;\n    border-top-color: transparent;\n    border-left-color: #ffe600;\n    transform: rotate(15deg);\n    margin-left: 98px;\n    margin-top: -30px;\n}\n.mouth .down{\n    /* border: 1px solid green; */\n    height: 200px;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    /* \u5634\u5DF4\u7684\u989C\u8272\u8D85\u51FA\u4F5C\u7528\u57DF\u90E8\u5206\u9690\u85CF:\u5728[\u7236\u5143\u7D20]\u7684css\u91CC\u5199overflow:hidden */\n    overflow: hidden;\n}\n/* \u4E0B\u5DF4:\u5F88\u9AD8\u7684\u692D\u5706\u7684\u4E0B\u534A\u90E8\u5206 */\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 1000px;\n    border-radius: 50%;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    border: 1px solid ;\n    width: 200px;\n    height: 300px;\n    background: #ff485f;\n    /*\u6B64\u65F6\u5B83\u57281000px\u9AD8\u7684\u4F4D\u7F6E,\u6240\u4EE5\u8981\u628A\u5B83\u901A\u8FC7\u7EDD\u5BF9\u5B9A\u4F4D\u641E\u4E0B\u6765*/position: absolute;\n    bottom: -140px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n}\n.face.left{\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n';

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');

// 下面是一边打字一边生效样式的代码

var n = 1;
// 默认速度  (let一定要写在用time之前,否则会失效)
var time = 100;

// 设置一个播放器
var player = {
    run: function run() {
        // 写完所有字之后n还是一直+1,所以应该设置打完以后n就不再加了
        if (n > string.length) {
            // 使用id和interval 设置一个跳出循环的逻辑 (砸掉闹钟)
            window.clearInterval(id);
            return;
        }
        n += 1;
        // 展示string的子字符串(从第0个到第n个)
        demo.innerText = string.substring(0, n);
        demo2.innerHTML = string.substring(0, n);
        // 把滚动条显示的顶层拉到非常大,也就是永远在最底层
        // 这可以保证代码文本每新打一行,视框都会往下面滚动
        demo.scrollTop = 99999;
    },
    play: function play() {
        return setInterval(player.run, time);
    },
    pause: function pause() {
        window.clearInterval(id);
    },
    slow: function slow() {
        player.pause();
        time = 300;
        id = player.play();
    },
    normal: function normal() {
        player.pause();
        time = 100;
        id = player.play();
    },
    fast: function fast() {
        player.pause();
        time = 10;
        id = player.play();
    }
};
var id = player.play();

// 添加暂停: 引用上面那个跳出循环的逻辑(把闹钟砸掉)
btnPause.onclick = function () {
    player.pause();
};
// 重新播放: 新建这个setinterval循环(再买个新的闹钟,放到原来的位置)
btnPlay.onclick = function () {
    // 从暂停的时候的id开始播放
    id = player.play();
};
// 变速按钮(把闹钟砸了,再定个新闹钟)
btnSlow.onclick = player.slow;
btnNormal.onclick = player.normal;
btnFast.onclick = player.fast;
},{}],"..\\..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59560' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.745ed489.map