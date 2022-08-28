// var slugify = require("slugify"); //  "type": "module", den sonra bununla hata aliyoruz
// import slugify from "slugify";

// console.log("hello node");

// const title = slugify("some string learning", "#");

// console.log(title);

import elif, { // export default dedigimiz tanimlari duz almaliyiz
  topla, // duz export ettigimiz tanimlari suslu parantez icinde alirken
  cikar,
  text,
  user,
  users,
} from "./my-module.js"; /* 2 functiona export yazdigim icin boyle alabilirim*/

elif("elif");
console.log(topla(5, 3));
console.log(cikar(5, 3));
console.log(text);
console.log(user);
console.log(users);
