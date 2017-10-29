const numberToEnglish = n => {
  let m = 1;
  let r = '';
  if (n === 0) {return 'zero';}
  chunks(n).forEach((v, i) => {
    if(v === 0) {
      console.log('I DO NOTHING!!!');
    } else if (i === 0){
      r = convertChunk(v) + ' ' + r;
    } else {
      r = convertChunk(v) + ' ' + numbersToPlace[m] + ' ' + r;
    }
    m *= 1000;
  })
  while(r[r.length-1] === ' ') {
    r = r.slice(0, r.length-1);
  }
  return r;
}

const chunks = n => {
  let r = [];
  while(n !== 0) {
    r.push(n % 1000);
    n = Math.floor(n / 1000);
  }
  return r;
}

const convertChunk = n => {
  let r = '';
  while(n !== 0) {
    if(Math.floor(n/100) > 0) {
      r += ' ' + numbersToWords[Math.floor(n/100)] + ' ' + numbersToPlace[100];
      n = n - (Math.floor(n/100) * 100);
    } else if(n > 20 && n%10 !== 0) {
      r += ' ' + numbersToWords[Math.floor(n/10)*10] + '-' + numbersToWords[n%10];
      n = 0;
    } else {
      r += ' ' + numbersToWords[Math.floor(n)];
      n = 0;
    }
  }
  return r.slice(1, r.length);
}

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

console.log(numberToEnglish(28));
console.log(numberToEnglish(1403));
console.log(numberToEnglish(18));
console.log(numberToEnglish(403003574));
console.log(numberToEnglish(740));