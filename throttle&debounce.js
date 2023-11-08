//throttle 
function debounce(func, delay) {
    let timerId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

// 
function throttle(callback, delay = 1000) {
    let shouldWait = false;
    return (...args) => {
      if (shouldWait) return;
      callback(...args);
      shouldWait = true;
      setTimeout(() => {
            shouldWait = false;
      }, delay);
    };
}