//Jen
var permuteUnique = function(nums) {
  const result = []
  const list = nums.slice()
  
  permute([], list)
  
  function permute(arr, numsToAdd) { // [], [1,1,2]
      if (arr.length === nums.length) { //if same length, then return
          result.push(arr)
      } else { //if not yet same length
          const dupArr = []   // [1]
          for (let i=0; i<numsToAdd.length; i++) {
              if (!dupArr.includes(numsToAdd[i])) { //if dupArr does NOT contain numsToAdd[i]
                  const potentialPermute = arr.slice() //[]
                  potentialPermute.push(numsToAdd[i]) //[1]
                  const newNumsToAdd = numsToAdd.slice() //[1,1,2]
                  newNumsToAdd.splice(i,1) //[1,2]
                  dupArr.push(numsToAdd[i]) 
                  permute(potentialPermute,newNumsToAdd)   //([1],[1,2])
              }
          }        
          
      }
  }
  return result
};

//Kev
let permuteUnique = function(nums){
  if(nums.length === 1) { return [nums]}
  let result = [];
  let obj = {};
  for(let i=0; i<nums.length; i++){
    if (!obj[nums[i]]) {
      let remaining = nums.slice(0,i).concat(nums.slice(i+1));
      let rest = permuteUnique(remaining);
      obj[nums[i]] = 1;
      if(rest.length === 0){
        result.push([nums[i]]);
      } else {
        for(let x = 0; x < rest.length; x++) {
          result.push([nums[i]].concat(rest[x]));
        }
      }
    }
  }
  return result;
}

//Jeff
const permuteUnique = function(nums) {
  const result = []
  
  function recursion(arr, remaining) {
      if (arr.length === nums.length) {
          result.push(arr)
          return
      }
      let iterations = remaining.length
      const duplicates = {}
      for (let i = 0; i < iterations; i++) {
          duplicates[remaining[i]] ? duplicates[remaining[i]] = duplicates[remaining[i]] + 1 : duplicates[remaining[i]] = 1
          if (duplicates[remaining[i]] > 1){
            continue
          }
          let remaining2 = remaining.slice()
          remaining2.splice(i,1)
          recursion(arr.concat(remaining[i]), remaining2)
      }
  }
  recursion([], nums)
  return result
};

console.log(permuteUnique([1,1,2,3,4,5,6,7,8,9]))