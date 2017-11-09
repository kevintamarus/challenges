const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let least = i; 
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[x] < arr[least]) {
      least = x;
      }
    }
    if (least != i) {
      let acc = arr[i];
      arr[i] = arr[least];
      arr[least] = acc;
    }
  }
  return arr;
}

console.log(selectionSort([2,44,1,23,5,7]))