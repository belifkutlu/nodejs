setTimeout(() => {
  console.log("ilk parametre function");
}, 2000); // ikinci parametre ise milisaniye cinsinden sure olarak verecegimiz sure tamamlandiktan sonra bi kere calisiyor

// setInterval(() => {
//   console.log("ben bir saniye de bir calisacagim");
// }, 1000); // bir saniye de bir calissin, bir milisaniye=bir saniye

// const sayHi = (cb) => {
//   console.log("merhaba");
//   cb();
// };  ***

// sayHi(() => {
//   console.log("hello");
// }); // parametre olarak function gonderdik ***

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("users yuklendi", users);
    fetch("https://jsonplaceholder.typicode.com/post/1")
      .then((data) => data.json())
      .then((post) => {
        console.log("post yuklendi", post);
        fetch("https://jsonplaceholder.typicode.com/post/2")
          .then((data) => data.json())
          .then((post2) => console.log("post2 yuklendi", post2));
      });
  }); //datayi jsona cevirmemiz lazim //herhangi bir veri kaynagina endpointe baglanip bize gosteriyor

/*asekron*/ async function getData() {
  const users =
    /*bekletme islemi*/
    await fetch("https://jsonplaceholder.typicode.com/users").json();

  const post1 = await fetch(
    "https://jsonplaceholder.typicode.com/post/1"
  ).json();

  const post2 = await fetch(
    "https://jsonplaceholder.typicode.com/post/2"
  ).json();

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
}
getData();

(async () => {
  console.log("selam");
})(); //anonim fonksiyon

(async () => {
  const users = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).json();

  const post1 = await fetch(
    "https://jsonplaceholder.typicode.com/post/1"
  ).json();

  const post2 = await fetch(
    "https://jsonplaceholder.typicode.com/post/2"
  ).json();

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
})(); //anonim fonksiyon
