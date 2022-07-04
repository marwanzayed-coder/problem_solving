function length(string) {
  let index = 0;
  while (string[index] !== undefined) index++;
  return index;
}
function uppercase(userName) {
  let final = "";
  let splitStr = userName.split(" ");
  for (let i = 0; i < length(splitStr); i++) {
    let word = splitStr[i][0];
    let wordCapt = String.fromCharCode(word.charCodeAt(0) - 32);
    splitStr[i].replace(word, wordCapt);
    final += splitStr[i].replace(word, wordCapt) + " ";
  }
  return final;
}

console.log(uppercase("marwan zayed"));
console.log(uppercase("marwan zayed shaban"));
