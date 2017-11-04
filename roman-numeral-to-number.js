const translateRomanNumeral = str => {
  let result = 0;
  let n = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  }
  for(let i = 0; i < str.length; i++) {
    if (n[str[i]]) {
      if(str[i+1] && n[str[i+1]] > n[str[i]]) {
        result += n[str[i] + str[i+1]];
        i++;
      } else {
        result += n[str[i]];
      }
    } else {
      return "null";
    }
  }
  return result;
}