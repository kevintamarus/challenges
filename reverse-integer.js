//using math
const reverseInteger = n => {
  let result = 0;
  while (n !== 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}

//using strings/arrays
const reverse = n => {
  return parseInt(n.toString().split('').reverse().join(''));
}