function permutation(nums){

  let result = [];
  for(let i=0; i<nums.length; i++){
    let remaining = nums.slice(0,i).concat(nums.slice(i+1));
    let rest = permutation(remaining);
    if(rest.length === 0){
      result.push([nums[i]]);
    }else{
      for(let x = 0; x < rest.length; x++){
	result.push([nums[i]].concat(rest[x]));
      }
    }
  }

  return result;
}

console.log( permutation([1,2,3]) )