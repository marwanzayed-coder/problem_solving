function cap_space(txt) {
  let final = txt;
  let regEx = /[A-Z]/g;
  let captSpace = txt.match(regEx);
  for (let i = 0; i < captSpace.length; i++) {
    final = final.replace(captSpace[i], ` ${captSpace[i].toLowerCase()}`);
  }
  return final;
}

console.log(cap_space("wePlayTennis"));
console.log(cap_space("iLikeCats"));
console.log(cap_space("thankYou"));
console.log(cap_space("computerScience"));
