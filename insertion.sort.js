const insertionSort = array => {
  for(var i = 0; i < array.length; i++) {
    var acc = array[i];
    var x = i - 1;
    while (x >= 0 && array[x].value > acc.value) {
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = acc;
  }
  return array;
}