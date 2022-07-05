function str_len_comparison(words) {
  if (words.length <= 1) {
    return false;
  } else {
    var longest = words.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
    var smallest = words.reduce(function (a, b) {
      return a.length < b.length ? a : b;
    });
    return longest.length == smallest.length ? true : false;
  }
}

console.log(str_len_comparison(["a", "b"]));
console.log(
  str_len_comparison(["Khalid", "Sultan", "AlDana", "Johrah", "Ghadah"])
);
console.log(str_len_comparison(["Satr", "CoderHub"]));
console.log(str_len_comparison(["123", "456", "789"]));
