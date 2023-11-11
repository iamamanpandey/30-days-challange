// let promise = new Promise(function(resolve, reject) {
//     resolve("done");
  
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
//   });

//   let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve runs the first function in .then
//   promise2.then(
//     result => alert(result), // shows "done!" after 1 second
//     error => alert(error) // doesn't run
//   );

//   function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
//       document.head.append(script);
//     });
//   }

//   let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);

// function delay(ms) {
//     // your code
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));


// promise chainging

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });