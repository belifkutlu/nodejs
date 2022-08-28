// const users = ["mehmet", "meryem", "buse"];

const users = [
  { name: "elif", age: 30 }, // ilk bunu buldugu icin bunu getirir
  { name: "elif", age: 18 },
  { name: "elif", age: 29 },
  { name: "buse", age: 40 },
  { name: "ceren", age: 17 },
];

/*
push  ---> array sonuna yeni bir eleman ekler
map  ---> verdigimiz islemi arrayin butun elemanlarina uygulayarak yeni array dondurur
find  ---> verdigimiz kosullarla array icinde arama yapar
filter  ---> verdigimiz kosula gore filtreleme yaparak o filtrelediklerinden yeni array olusturuyor
some  ---> arrayin icindeki elemanlardan herhangi biri verdigimiz kosula uyuyorsa true uymuyorsa false doner
every ---> arrayin butun elemanlarinin sarta uymasini bekliyor.
includes ---> array icinde geciyor mu gecmiyor mu onu kontrol etmemizi sagliyor.
 */

/*** push ***/
// users.push("ayse");
// users.push("fatma");
// console.log(users);

/*** normalde array donerken ***/
// for (let index = 0; index < users.length; index++) {
//   const element = users[index];
//   // console.log(element);
//   console.log(users[index]);
// }

/*** map ***/
// users.map((item) => {
//   console.log(item.name);
// });

/*** find ***/
// const result = users.find((item) => {
//   item.name === "elif" && item.age > 20;
// });
// console.log(result);

/*** filter ***/
// const filtred = users.filter((item) => {
//   return item.name === "elif" && item.age < 20;
// });

// const filtred = users.filter(({ name, age }) => {
//   return name === "elif" && age < 20;
// });
// console.log(filtred);

/*** some ***/
// yasi 10 esit olan var mi
const some = users.some((item) => item.age === 10);
console.log(some); //false

/*** every ***/
const every = users.every((item) => item.age > 5);
console.log(every); // true

/*** includes ***/
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("muz");
console.log(isIncluded); //true
