const isPlaindrome = (inputChar) => {
    let str = inputChar.toString();
    let resultWord = '';
    for(let i=str.length-1; i>=0; i--)
    {
        resultWord += str[i];
    }
    return (resultWord == str) ? true : false;
}
console.log(isPlaindrome('racecar'))
console.log(isPlaindrome('abc'))
console.log(isPlaindrome(121))


const customInArray = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return true;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
	return false;
}

console.log(customInArray([1,3,5,6,9,14,29,57,89],29));