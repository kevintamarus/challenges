const bubbleSort = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let x = array.length - i; x > 0; x--) {
      if (array[x] < array[x - 1]) {
        let acc = array[x];
        array[x] = array[x - 1];
        array[x - 1] = acc;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,6,3,4,5,11,34]))