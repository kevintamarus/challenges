function rockPaperPermutation (roundCount) {
  const output = [];
  if (!roundCount) {
    return output;
  }
  
 function inner(str) {
    if (str.length === roundCount) {
      output.push(str);
      return;
    }
    inner(str + 'r');
    inner(str + 'p');
    inner(str + 's');
  }
  
 inner('');
  
 return output;
}