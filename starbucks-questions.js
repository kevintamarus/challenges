function property2(arr) {
  let result = arr.filter( obj =>{
    console.log('1')
    return obj.last && obj.last !== ''
  }).map( obj => {
    console.log('1')
    return obj.first + ' ' + obj.last
  })
  return result
}

console.log(property2([
  {  
    first: 'john',  
    last: 'thompson'  
  },
  {  
    first: 'frank',  
    last: 'clemens'  
  },
  {  
    first: 'alice',
    last: ''  
  } 
]))

function property(arr) {
  let results = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].last && arr[i].last !== null) {
      results.push(arr[i].first + ' ' + arr[i].last);
    }
  }
  return results;
}

// Given this list of functions, how would you call all of them in parallel and return the result in a callback? 
function waitOneSecond () {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve('Done!');
    }, 1000)  
  })  
}  
  
function callApi () {  
  // Assume these functions are in scope and are asynchronous returns  
	return fetchScores()  
	  .then(fetchDates)
}  
  
function waitTwoSeconds () {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => { 
      resolve('Done!');
    }, 2000)
  })
} 