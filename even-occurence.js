function evenOccurrence (arr) {
  var object = {};
  var object2 = {};
  arr.forEach(function(value) {
    if(typeof value === "string") {
      if (object[value]) {
      object[value]++;
      } 
      else {
        object[value] = 1;
      }
    }
    else  {
      if (object2[value]) {
      object2[value]++;
      } 
      else {
        object2[value] = 1;
      }
    }
  });
  
  for (let key2 in object2) {
    if (object2[key2]%2 === 0) {
      return parseInt(key2);
    }
  }
  for (let key in object) {
    if (object[key]%2 === 0) {
      return key;
    }
  }
  return null;
}
