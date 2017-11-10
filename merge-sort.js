const mergeSort = arr => {
  if (arr.length < 2)
     return arr;
  let middle = Math.floor(arr.length/2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
 let result = [];
 let l = 0;
 let r = 0;
 while(l < left.length && r < right.length){
    if (left[l] < right[r]){
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
   }
 }  
 return result.concat(left.slice(l)).concat(right.slice(r));
}