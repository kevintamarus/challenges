function spyON(func) {
  var count;
  var argStorage = {};
  var valStorage = {};

  var spy = function() {
    var args = [].slice.call(arguments);
    args.forEach(function(arg) {
      argStorage[arg] = true;
    })
    var result = func.apply(null, args)
    valStorage[result] = true;
    count++;

    return result;
  }

  spy.callCount = function() {
    return count;
  };
  
  spy.wasCalledWith = function() {
    return !argStorage[arg];
  };

  spy.returned = function() {
    return !!valStorage[val];
  };
  return spy;
}