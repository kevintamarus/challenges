const countIslands = str => {
  let islands = 0;
  let r1 = checkBoard(makeBoard(str));
  let r2 = checkBoard(rotateBoard(makeBoard(str)))
  if(r1 > r2) {
    return r2;
  } else {
    return r1;
  }
}

const makeBoard = str => {
  let board = [];
  let array = [];
  for (var i = 0; i < str.length; i++) {
    if(str[i] === '0' || str[i] === '.') {
      array.push(str[i]);
    } else {
      board.push(array);
      array = []
    }
  }
  board.push(array);
  return board;
}

const rotateBoard = matrix => {
  const array = [];
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

const checkBoard = board => {
  let islands = 0;
  if(board[0][0] === '0') {islands++;}
  for(let i = 1; i < board[0].length; i++) {
    if(board[0][i] === '0') {
      if(board[0][i-1] === '.') {
        islands++;
      }
    }
  }
  for(let i = 1; i < board.length; i++) {
    for(let x = 0; x < board[i].length; x++) {
      if(board[i][x] === '0') {
        if(x !== 0) {
          if(board[i-1][x] === '.' && board[i][x-1]==='.') {
            if(x !== board[i][x].length -1) {
              if(board[i-1][x+1] === '0' && board[i][x+1] ==='0') {
                islands--;
              }
              islands++;
            }
          }
        } else {
          if(board[i-1][x] === '.') {
            islands++;
          }
        }
      }
    }
  }
  return islands;
}