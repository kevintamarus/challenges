function quickSort(arr) {
  //base case
  if (arr.length === 0 || arr.length === 1) {
    return arr
  }
  //recursive case/step case
  let pivot = [arr[0]];
  let left = [];
  let right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([1,5,20,3,34,10]))