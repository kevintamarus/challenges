//All Operations

const allOperations = arr => {
  const results = [];
  const recurse = (total, index) => {
    if(index === arr.length) {
      results.push(total);
    } else {
      recurse(total + arr[index], index + 1);
      recurse(total - arr[index], index + 1);
      recurse(total * arr[index], index + 1);
      recurse(total / arr[index], index + 1);
    }
  }
  recurse(arr[0], 1);
  return results;
}

console.log(allOperations([1,1])) // => [2,0,1,1]
console.log(allOperations([1,2])) // => [3,-1,2,0.5]
console.log(allOperations([1])) // => [1]
console.log(allOperations([3,3])) // => [6,0,9,1]
console.log(allOperations([1,1,1])) // => [3,1,2,2,1,-1,0,0,2,0,1,1,2,0,1,1]