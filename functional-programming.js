
/*Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/

var example = "Hannah has a racecar that had 12321 miles, the car's nickname is Halalah";

function findLongestPalindrome(sentence) {
  var words = sentence.split(' ');
  var palindromes = words.filter(function(x) {
      return isPalindrome(x);
  })
  palindromes.sort(sortAscendingByLength);
  return palindromes[palindromes.length-1];
}


function reverseString(string) {
    return string.split('').reverse().join('');
}


function isPalindrome(word) {
  word = word.toLowerCase();
  if (word === reverseString(word)) {
      return true;
  }
  else {
      return false;
  }
}


function sortAscendingByLength(a, b) {
    return a.length > b.length;
}

var output = findLongestPalindrome(example);
console.log(output);