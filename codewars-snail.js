var example = [[1,2,3],
               [4,5,6],
               [7,8,9]];

//output => [1,2,3,6,9,8,7,4,5]

var example2 = [[1, 2, 3, 4, 5, 6],
                [20,21,22,23,24,7],
                [19,32,33,34,25,8],
                [18,31,36,35,26,9],
                [17,30,29,28,27,10],
                [16,15,14,13,12,11]]

//output ===> [1,2,3.....34,35,36];

var snail = function(array) {
  var newArray = [];
  while(array.length > 0) {
    if(array.length > 0) {
      newArray = newArray.concat(array[0]);
      array.splice(0,1);
    }
    if (array.length > 0) {
      for(var i=0; i<array.length; i++) {
        newArray.push(array[i][array[i].length-1]);
        array[i].splice(array[i].length-1, 1);
      }
    }
    if (array.length > 0) {
      var reversed = (array.slice(-1)[0]).reverse();
      newArray = newArray.concat(reversed);
      array.splice(-1,1);
    }
    if (array.length > 0) {
      for(var i=array.length-1; i>=0; i--) {
        newArray.push(array[i][0]);
        array[i].splice(0, 1);
      }
    }
  }
  return newArray;
}

var output = snail(example);
