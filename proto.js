// var e = 10;

// function sum(a){
//     return function(b){
//         return function(c){
//             return function (d){
//                 return  a +b+c+d+e
//             }
//         }
//     }
// }
// console.log(sum(5)(5)(5)(5))


function createBase(num){
    return function (inner){
         console.log(num + inner)
    }
}

var addSix = createBase(6)
addSix(10);addSix(20)