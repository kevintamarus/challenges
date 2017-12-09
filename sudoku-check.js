function sudokuCheck (boardStr) {
  let arrayRow = boardStr.split('\n');
  arrayRow.forEach(function(value, index) {
    arrayRow[index] = value.split('');
  })
  let arrayColumn = rotateMatrix(arrayRow);
  let arrayBlock = [];
  arrayBlock = arrayBlock.concat(threeBlock(arrayRow.slice(0,3)));
  arrayBlock = arrayBlock.concat(threeBlock(arrayRow.slice(3,6)));
  arrayBlock = arrayBlock.concat(threeBlock(arrayRow.slice(6,9)));
  console.log(arrayBlock)
  if(check(arrayRow) && check(arrayColumn) && check(arrayBlock)) {
    return 'solved';
  } else {
    return 'invalid';
  }
}
//helper function to create array of each block
function threeBlock(array) {
  var result = [];
  for (let i = 0; i < 3; i++) {
    if(i === 0) {
      result.push(array[i].slice(0,3));
      result.push(array[i].slice(3,6));
      result.push(array[i].slice(6,9));
    }
    else {
      result[0] = result[0].concat(array[i].slice(0,3));
      result[1] = result[1].concat(array[i].slice(3,6));
      result[2] = result[2].concat(array[i].slice(6,9));
    }
  }
  return result;
}

//helper function Check, input is an array of array of strings
function check (array) {
  var result = true;
  for(let i = 0; i < array.length; i++) {
    array[i].sort();
    for(let x = 0; x < array[i].length; x++) {
      if (parseInt(array[i][x]) !== x + 1) {
        result = false;
      }
    }
  }
  return result;
}

//helper function Rotate
function rotateMatrix (matrix) {
  let array = [];
  for(let i = matrix.length - 1; i >= 0; i--) {
    for(let x = 0; x < matrix[i].length; x++) {
      if (i === matrix.length - 1) {
        array.push([matrix[i][x]]);
      }
      else {
        (array[x]).push(matrix[i][x]);
      }
    }
  }
  return array;
}