//recursion
const pathsToWork = (e, s) => {
  if(e === 0) {return 1}
  if(s === 0) {return 1}
  if(e === 1 && s === 1) {return 2}
  return pathsToWork(e-1, s) + pathsToWork(e, s-1)
}