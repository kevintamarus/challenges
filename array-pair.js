const arrayPair = arr => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[Math.abs(arr[i])] < 0) {
      return true;
    } else {
      arr[Math.abs(arr[i])] = -(arr[Math.abs(arr[i])]);
    }
  }
  return false;
}

console.log(arrayPair([1,2,2,3])); //true
console.log(arrayPair([1,3,2,0,5,1])); //true
console.log(arrayPair([1,3,2,0])); //false
console.log(arrayPair([5,1,3,2,4,0])); //false