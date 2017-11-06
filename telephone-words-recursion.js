const telephoneWords = digitString => {
  const reference = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  const result = [];
  const recurse = (array, track) => {
    if (!array.length) {
      result.push(track.join(''));
      return;
    }
    reference[+array[0]].split('').forEach(function(e) {
      track.push(e);
      recurse(array.slice(1), track); 
      track.pop();
    });
  }
  recurse(digitString.split(''), []);    
  return result;
}

console.log(telephoneWords('0002'));
console.log(telephoneWords('1123'));