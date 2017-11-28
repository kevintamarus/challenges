// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (arr, size) => {
  if(size === 1) {
    return arr;
  }
  const result = [];
  let counter = 1;
  for(let i = 0; i < arr.length; i++) {
    if(counter === size) {
      result[result.length-1].push(arr[i])
      counter = 1;
    } else if(counter === 1) {
      result.push([arr[i]]);
      counter++;
    } else {
      result[result.length-1].push(arr[i])
      counter++;
    }
  }
  return result;
}

console.log(chunk([1, 2, 3, 4], 2)) //--> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)) //--> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)) //--> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4))//--> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)) //--> [[ 1, 2, 3, 4, 5]]