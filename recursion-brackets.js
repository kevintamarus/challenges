const brackets = n => {
  let string = '';
  while(n !== 0) {
    string += '()';
    n--;
  }
  const recurse = string => {
    const result = [];
    if(string.length === 1) {
      result.push(string);
      return result;
    }
    for(let i = 0; i < string.length; i++) {
      let first = string[i];
      let remaining = string.substring(0,i) + string.substring(i + 1);
      const remainingPermutations = recurse(remaining);
      for(let x = 0; x < remainingPermutations.length; x++) {
        result.push(first + remainingPermutations[x])
      }
    }
    return result;
  }
  const permutations = recurse(string);
  let filterSimilar = new Set();
  permutations.forEach(string => {
    filterSimilar.add(string);
  })
  return (Array.from(filterSimilar)).filter( bracketString => {
    return checkLegalBrackets(bracketString) === true;
  })
}

const checkLegalBrackets = string => {
  let counter = 0;
  for(let i = 0; i < string.length; i++) {
    if(counter < 0) {
      return false;
    }
    if(string[i] === '(') {
      counter++;
    } else {
      counter--;
    }
  }
  return true;
}
console.log(brackets(3))