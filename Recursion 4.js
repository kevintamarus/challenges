function recurse(array, row) {
  const result = []
  if(row === 1) {
    return(array[0])
  }
  for(let i = 0; i < array.length; i++) {
    result.push(array[i] + main[row+1][i])
    result.push(array[i+1] + )
  }
  return result
}