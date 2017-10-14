// let sum = function(array) {
//   let left = 0;
//   let right = 0;
//   let prevIndex = 0;
//   let currentIndex = 1;
//   array.forEach(value => {
//     right += value;
//   })
//   for(let i = 1; i < array.length; i++) {
//     left = array[i]
//   }
// }

function sum(array){
  let left = 0;
  let right = array.length - 1;
  let lsum = array[left];
  let rsum = array[right];

  while(left < right) {
    if(lsum === rsum) {
      lsum += array[++left];
      rsum += array[--right];
    } else if (lsum < rsum) {
      lsum += array[++left];
    } else {
      rsum += array[--right];
    }
  }
  return left;
}

console.log( sum([5,3,1,3,4,5]))