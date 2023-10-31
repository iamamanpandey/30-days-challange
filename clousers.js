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
