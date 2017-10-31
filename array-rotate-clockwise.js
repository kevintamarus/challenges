const arrayRotateClockwise = arr => {
  const result = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    for(let x = 0; x < arr[i].length; x++) {
      if(i === arr.length - 1) {
        result.push([]);
      }
      result[x].push(arr[i][x]);
    }
  }
  return result;
}

const arrayRotateClockwise2 = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    for(let x = 0; x < arr[i].length; x++) {
      if(i === 0) {
        result.push([arr[i][x]]);
      } else {
        result[x].unshift(arr[i][x]);
      }
    }
  }
  return result;
}

console.log(arrayRotateClockwise([[3,6,9],[2,5,8],[1,4,7]]));
console.log(arrayRotateClockwise2([[3,6,9],[2,5,8],[1,4,7]]));