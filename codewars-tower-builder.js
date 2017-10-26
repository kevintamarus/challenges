/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors) {
  var array = [];
  var repeatNumber = nFloors;
  var emptyStrings = "";
  var count = 1;
  while(count <= nFloors) {
    var currentStars = "*".repeat(repeatNumber*2 -1)
    array.unshift(emptyStrings + currentStars + emptyStrings);
    emptyStrings = emptyStrings + " ";
    count++;
    repeatNumber--;
  }
  
  return array;
}


//better solutions
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}


function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}