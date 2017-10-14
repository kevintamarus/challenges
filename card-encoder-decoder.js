function cardsConverter(input){
  if(!Array.isArray(input)) {
    return null;
  }
  let results = [];
  if(typeof input[0] === 'number') {
    input.sort(function(a,b) {
      return a-b;
    })
    input.forEach(function(number) {
      let val = '';
      if(number % 13 === 0) {
        val += 'A';
      } else if(number % 13 === 9) {
        val += 'T';
      } else if(number % 13 === 10) {
        val += 'J';
      } else if(number % 13 === 11) {
        val += 'Q';
      } else if(number % 13 === 12) {
        val += 'K';
      } else {
        val += (number%13 + 1).toString();
      }
      
      if(Math.floor(number / 13) === 0) {
        val += 'c';
      } else if(Math.floor(number / 13) === 1) {
        val += 'd';
      } else if(Math.floor(number / 13) === 2) {
        val += 'h';
      } else if(Math.floor(number / 13) === 3) {
        val += 's';
      }
      results.push(val);
    })
  } else {
    input.forEach(function(str) {
      let val = 0;
      if(str[0] === 'A') {
        val += 0;
      } else if(str[0] === 'T') {
        val += 9;
      } else if(str[0] === 'J') {
        val += 10;
      } else if(str[0] === 'Q') {
        val += 11;
      } else if(str[0] === 'K') {
        val += 12;
      } else {
        val += parseInt(str[0]) - 1;
      }
      
      if(str[1] === 'c') {
        val += 0;
      } else if(str[1] === 'd') {
        val += 13;
      } else if(str[1] === 'h') {
        val += 26;
      } else if(str[1] === 's') {
        val += 39;
      }
      results.push(val);
    })
    results.sort(function(a,b) {
      return a-b;
    })
  }
  return results;
}