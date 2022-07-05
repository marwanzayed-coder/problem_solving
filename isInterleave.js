function isInterleave(A, B, C) {
  return (
    JSON.stringify(Array.from(A + B).sort()) ==
    JSON.stringify(Array.from(C).sort())
  );
}

console.log(isInterleave("wysn", "showus", "shwysowuns"));
console.log(isInterleave("hsbxib", "ywssg", "hsywbxsisgb"));
console.log(isInterleave("zh2g", "wts", "shwt2gs"));
console.log(isInterleave("hsyhag", "2b12", "hsy2bhag1"));
