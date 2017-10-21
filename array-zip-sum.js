const zipSum = (xs, ys) => {
  let result = [];
  xs.forEach( (value, i) => {
    if(ys[i]) {
      result.push(xs[i] + ys[i]);
    }
  })
  return result;
}