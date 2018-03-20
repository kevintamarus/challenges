function func2(arr) {
  var numbers = new Set();
  var count = 0;
  var newArray = [];
  var zeros = [];
  for(var i = 0; i < arr.length; i++) {
    numbers.add(arr[i]);
    count++;
    if(numbers.size < count) {
      zeros.push(0);
      count--;
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray.concat(zeros)
}

//mike's answer
function mikeRemoveDup(arr) {
  let length = arr.length;
  const set = new Set();
  let slow = 0;

  for(let fast = 0; fast < length; ++fast) {
    if(!set.has(arr[fast])) arr[slow++] = arr[fast];
    set.add(arr[fast]);
  }

  for(let i = slow; i < length; ++i) {
    arr[i] = 0;
  }
}