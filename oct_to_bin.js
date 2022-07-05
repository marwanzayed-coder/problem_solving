function oct_to_bin(octal) {
  return parseInt(octal, 8).toString(2);
}

console.log(oct_to_bin(5252));
console.log(oct_to_bin(777));
console.log(oct_to_bin(123));
console.log(oct_to_bin(6523));
