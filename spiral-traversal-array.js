//if space complexity is irrelevant, otherwise we directly splice
function spiralTraversal (original) {
  let matrix = original.slice();
  let array = [];
  while(matrix.length > 0) {
    array = array.concat(matrix[0]);
    matrix.splice(0,1)
    for(let i = 0; i < matrix.length; i++) {
      array = array.concat(matrix[i].splice(-1, 1));
      if(matrix[i] === 0) {
        matrix[i].splice(0);
      }
    }
    if(matrix.length === 1) {
      array = array.concat(matrix[0].reverse())
      matrix.splice(-1,1);
    } else if(matrix.length > 1) {
      array = array.concat(matrix[matrix.length-1].reverse());
      matrix.splice(-1,1);
    }
    for(let i = matrix.length-1; i >=0; i--) {
      array = array.concat(matrix[i].splice(0,1));
      if(matrix[i] === 0) {
        matrix[i].splice(0);
      }
    }
  }
  return array;
}