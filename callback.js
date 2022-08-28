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

// import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("users yuklendi", users);
//     fetch("https://jsonplaceholder.typicode.com/post/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("post yuklendi", post);
//         fetch("https://jsonplaceholder.typicode.com/post/2")
//           .then((data) => data.json())
//           .then((post2) => console.log("post2 yuklendi", post2));
//       });
//   }); //datayi jsona cevirmemiz lazim //herhangi bir veri kaynagina endpointe baglanip bize gosteriyor

// /*asekron*/ async function getData() {
//   const users =
//     /*bekletme islemi*/
//     await fetch("https://jsonplaceholder.typicode.com/users").json();

//   const post1 = await fetch(
//     "https://jsonplaceholder.typicode.com/post/1"
//   ).json();

//   const post2 = await fetch(
//     "https://jsonplaceholder.typicode.com/post/2"
//   ).json();

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }
// getData();

// (async () => {
//   console.log("selam");
// })(); //anonim fonksiyon

// (async () => {
//   const users = await ( await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   )).json()

//   const post1 = await (await fetch(
//     "https://jsonplaceholder.typicode.com/post/1"
//   )).json()

//   const post2 = await (await fetch(
//     "https://jsonplaceholder.typicode.com/post/2"
//   )).json()

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })(); //anonim fonksiyon

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/post/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/post/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    //resolve: bu islem basariyla gerceklesti al sana data. reject ise bu kod calisirken bir problem oldu bunu reject red ettim
    // console.log("comments");
    // if (number === 1) {
    //   resolve({ text: "selam" });
    // } else {
    //   reject("bir sorun olustu");
    // }
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("bir sorun olustu")
  });
};

// kendi fonksiyonlarimiz uzerinden ilgili datayi donuyoruz.

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts" + post_id
    );
    // resolve(data);
    reject("bir sorun daha olustu");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     // .then((data) => {
//     //   console.log("bitti", data);
//     // })
//     // .catch((e) => {
//     //   console.log(e);
//     // });

//     const posts = await getPost(1);

//     // .then((data) => {
//     //   console.log(data);
//     // })
//     // .catch((e) => {
//     //   console.log(e);
//     // });
//     console.log(posts);
//     console.log(users);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(1), getPost(1)])
  .then(console.log)
  .catch(console.log());
