

var secret1 = "whatisup"
var triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

var recoverSecret = function(triplets) {
  var array = triplets[0];
  var object = {};
    for(var i=0; i<triplets[0].length; i++) {
      object[triplets[0][i]] = i;
    }
  triplets.splice(0,1);
  while(triplets.length > 0) {
    for(var i=0; i<triplets.length; i++) {
      var index = 0;
      while(triplets[i] && index <= 2) {
        if(triplets[i][index] in object) {
          for(var x=0; x<triplets[i].length; x++) {
            var element = triplets[i][x];
            if(element in object === false) {
              var addIndex = 0
              if(x > index) {
                addIndex = object[triplets[i][index]] + 1;
              }
              else {
                addIndex = object[triplets[i][index]];
              }
              for(var y=array.length-1; y>=addIndex; y--) {
                object[array[y]]++;
                array[y+1] = array[y];
              }
              array[addIndex] = element;
              object[element] = addIndex;
            }
            else{
              if(x > 0 && object[element] < object[triplets[i][x-1]]) {
                var compareElement = triplets[i][x-1];
                var spliceIndex = object[element];
                var targetIndex = object[compareElement];
                for(var y=spliceIndex+1; y<=targetIndex; y++) {
                  object[array[y]]--;
                  array[y-1] = array[y];
                }
                array[targetIndex] = element;
                object[element] = targetIndex;
              }
            }
          }
          triplets.splice(i,1);
          i--
        }
        else {
          index++;
        }
      }
    }
  }
  return array.join('');
}
