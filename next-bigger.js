let bigger = function(n) {
  var n = n.toString();
  let index = n.length-1;
  let array = n.split('');
  let result = -1;
  let loop = true;
  while (index !== 0) {
    for(let i = index; i >= 0; i--) {
      for(let x = index - 1; x >= 0; x--) {
        if(n[i] > n[x]) {
          array[index] = n[x];
          array[x] = n[index];
          var spliced = array.splice(x+1);
          array = array.concat(spliced.sort());
          result = parseInt(array.join(''));
          index = 0;
          break;
        }
        if(i === 0) {
          index = 0;
        }
      }
    }
    index--;
  }
  return result;
}
debugger;
console.log( bigger(5358765) );