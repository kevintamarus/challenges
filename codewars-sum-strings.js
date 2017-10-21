//https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

function sumStrings(a,b) { 
  if(!/^\d+$/.test(a)) {
    return parseInt(b).toString();
  } else if(!/^\d+$/.test(b)) {
    return parseInt(a).toString();
  }
  return (parseInt(a) + parseInt(b)).toString();
}

console.log(sumStrings('222','333')) // => 555
console.log(sumStrings('38b','333')) // => 333
console.log(sumStrings('222','fidh3hd90293')) // => 222
console.log(sumStrings('1672','20')) // => 1692