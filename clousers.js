// A closures is a combination of function bundled with there lexical envoirment.

function init() {
  var name = "hello";
  function innerFunction() {
    // innerFunction will form a clouser
    console.log(name);
  }
  innerFunction();
}

// init()
// once functuon
function once() {
  let done = false;
  return function display() {
    if (done) {
      return;
    } else {
      console.log("efffff");
      done = true;
    }
  };
}

// var call =

// once();

// call();
// call();

// privatization with closers

const counter = (function () {
  let privateCounter = 0;

  function increment(val) {
    privateCounter += val;
  }
  function decrement(val) {
    privateCounter += val;
  }
  function value() {
    return privateCounter;
  }

  return {
    increment,
    decrement,
    value,
  };
})();

counter.increment(5);

counter.increment(10);
console.log(counter.value());

function a() {
  for (var i = 0; i < 3; i++) {
    inner(i);
  }
  function inner(x) {
    setTimeout(function log() {
      console.log(x);
    }, x * 1000);
  }
}

a();
