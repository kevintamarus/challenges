const climbStairs = n => {
  const r = [0,1,2];
  while(n >= r.length) { r.push(r[r.length-1]+r[r.length-2]) }
  return r[n];
}