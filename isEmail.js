function isEmail(email) {
  let regEx = /\w+@\w+\.\w{2,}/gi;
  return regEx.test(email);
}

isEmail("example@example.com");
isEmail("example@example.c");
isEmail("example@com");
isEmail("@example.com");
