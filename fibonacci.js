//find the nth fibonacci sequence

//dynamic
const fib = n => {
  let arr = [1,1];
  if(n < 3) {
    return arr[n-1];
  }
  while( arr.length < n) {
    arr.push(arr[arr.length-2] + arr[arr.length-1]);
  }
  return arr[n-1];
}

//recursion
const fib2 = n => {
  if(n < 3) {
    return 1;
  }
  return fib2(n-1) + fib2(n-2);
}

console.log(fib2(8))