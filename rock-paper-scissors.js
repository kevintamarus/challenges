const rockPaperScissors = roundCount => {
  if(roundCount === 0) { return []};
  const results = [];
  const options = ['r', 'p', 's'];
  const recurse = (permutations, rounds) => {
    if(rounds === 0) {
      results.push(permutations);
      return;
    }
    options.forEach(option => {
      recurse(permutations.concat(option), rounds - 1)
    })
  }
  recurse([], roundCount);
  return results.map(result => result.join(''));
}

console.log(rockPaperScissors(3));