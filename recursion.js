//start 5 , end == 10
// create an array with given range of numbers

function rangeOfNumbers(start, end) {
  if (start > end) {
    return [];
  } else {
    const number = rangeOfNumbers(start + 1, end);
    number.push(start);
    return number;
  }
}

// console.log(rangeOfNumbers(5, 10));

// check palindrome number 121 return true or false

function checkPalindrome(number) {
  const string = number.toString();
  const arr = [...string];
  for (let index in arr) {
    console.log(index);
    if (arr[index] === arr[arr.length - 1 - index]) {
      return true;
    } else {
      return false;
    }
  }
}

function rev(n, temp) {
  if (n == 0) {
    return temp;
  } else {
    temp = temp * 10 + (n % 10);
    return rev(Math.floor(n / 10), temp);
  }
}

function reverseString(string) {
    const arr = [...string]
    if(arr?.length===0){
        return '';
    }else{
        const number = reverseString(arr[arr.length-1]) 
        return arr
    }
}


function recurse() {
  // function code
  recurse();
  // function code
}

recurse();