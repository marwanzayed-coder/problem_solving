function calculate_sum(lst) {
  let final = 0;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === 7) break;
    else final += lst[i];
  }
  return final;
}

console.log(calculate_sum([1, 2, 3, 4]));
console.log(calculate_sum([0, 7, 12, 67]));
console.log(calculate_sum([23, 43, 27, 87, 67]));
console.log(calculate_sum([84, 469]));
