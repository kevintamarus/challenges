//find sum of two numbers at n

const sumOfTwoNumbers = (arr, n) => {
  if(arr.length < 2 || n < 0) {
    return [];
  }
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while(pointer1 !== pointer2) {
    if(arr[pointer1] + arr[pointer2] === n) {
      return [arr[pointer1], arr[pointer2]];
    } else if(arr[pointer1] + arr[pointer2] < n) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return [];
}

console.log(sumOfTwoNumbers([1,2,3,4,5], 4)) //=> [1,3]
console.log(sumOfTwoNumbers([1,2,3,4,5], 3)) //=> [1,2]
console.log(sumOfTwoNumbers([1,2,3,4,5], 0)) //=> []
console.log(sumOfTwoNumbers([1,2,3,4,5], 9)) //=> [4,5]