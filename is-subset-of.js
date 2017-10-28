Array.prototype.isSubsetOf = function (inputArray) {
  return this.reduce(function(acc, curr) {
    return acc && inputArray.includes(curr)
  }, true)
}