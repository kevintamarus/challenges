const fractionConverter = n => {
  let bottom = 1;
  while (n % 1 !== 0) {
    n *= 10;
    bottom *= 10;
  }
  while(n % 5 === 0 && bottom % 5 === 0){
     n /= 5;
     bottom /= 5;
  }
  while(n % 2 === 0 && bottom % 2 === 0){
     n /= 2;
     bottom /= 2;
  }
  return `${n}/${bottom}`;
}

console.log(fractionConverter(5.6))