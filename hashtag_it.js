function hashtag_it(my_array) {
  let final = [];
  for (let i = 0; i < my_array.length; i++) {
    final.push("#" + my_array[i]);
    // console.log("#" + my_array[i]);
  }
  return final.join(" ");
}

console.log(hashtag_it(["stay_home", "coronavirus", "Saudi_Arabia"]));
console.log(hashtag_it(["Vibes", "SAFCSP", "entrepreneur"]));
console.log(hashtag_it(["SAFCSP", "SAUDI_ARABIA", "Riyadh"]));
console.log(hashtag_it(["Programming", "Code"]));
