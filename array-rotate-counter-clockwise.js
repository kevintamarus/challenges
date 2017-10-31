const arrayRotateCounterClockwise = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    for(let x = arr[i].length - 1; x >= 0; x--) {
      if(i === 0) {
        result.push([arr[i][x]]);
      } else {
        result[arr.length - 1 - x].push(arr[i][x]);
      }
    }
  }
  return result;
}

console.log(arrayRotateCounterClockwise([[7,4,1],[8,5,2],[9,6,3]]));