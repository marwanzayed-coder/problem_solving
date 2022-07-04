function length(string) {
  let index = 0;
  while (string[index] !== undefined) index++;
  return index;
}
function join(array) {
  let arr = "";
  for (let i = 0; i < length(array); i++) {
    arr += array[i];
  }
  return arr;
}
function reverse(string) {
  let reversed = "";
  for (let i = length(string) - 1; i >= 0; i--) reversed += string[i];
  return reversed;
}
function toString(num) {
  return `${num}`;
}

function split(str) {
  let arr = [];
  for (let i = 0; i < length(str); i++) {
    push(arr, str[i]);
  }
  return arr;
}
function push(array, ...ele) {
  let arr = array;
  let count = length(array);
  for (let i = 0; i < length(ele); i++) {
    arr[count++] = ele[i];
  }
  return arr;
}

function reverse_a_number(n) {
  let toStr = toString(n);
  let splitVar = split(toStr);
  let reverseVar = reverse(splitVar);
  let joinVar = join(reverseVar);
  return joinVar;
}

console.log(Number(reverse_a_number(32243))); // 34223
