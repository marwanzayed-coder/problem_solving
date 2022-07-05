function getPrimesBetween(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(getPrimesBetween(1, 10));
console.log(getPrimesBetween(20, 50));
console.log(getPrimesBetween(90, 100));
console.log(getPrimesBetween(53, 67));
