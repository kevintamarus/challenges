const reverseDigits = n => {
  let result = 0;
  while(n !== 0) {
    result += n % 10;
    n -= result;
    n = n / 10
    result = result * 10;
  }
  return result;
}

const reverseDigits2 = n => {
  return n.toString().split('').reverse().join('');
}

console.log(reverseDigits(6549)) // => 9456
console.log(reverseDigits(2020)) // => 202
console.log(reverseDigits(40957432)) // => 23475904
console.log(reverseDigits(111)) // => 111
console.log(reverseDigits(20345)) // => 54302

console.log(reverseDigits2(6549)) // => 9456
console.log(reverseDigits2(2020)) // => 202
console.log(reverseDigits2(40957432)) // => 23475904
console.log(reverseDigits2(111)) // => 111
console.log(reverseDigits2(20345)) // => 54302
