//1. sekilde yazimi
// function topla(a, b) {
//   return a + b;
// };

export const topla = (a, b) => a + b; /* export*/
export const cikar = (a, b) => a - b;

export const text = "text"; // es6 ile birlikte duz text string te export edilebilir
export const user = {
  // es6 ile birlikte obje de export edilebilir
  name: "elif",
  surname: "kutlu",
};
export const users = [
  // es6 ile birlikte array de export edilebilir
  {
    name: "elif",
    surname: "kutlu",
  },
  {
    name: "meryem",
    surname: "yilmaz",
  },
  {
    name: "buse",
    surname: "sonmez",
  },
];

/* export default basina da yazabiliriz */ const hello = (name) => {
  /* export*/
  // console.log("hello module " + name);
  console.log(`helllo ${name}`);
};

export default hello; // default olarak aktardigimiz tanim importta illa hello yani ayni adla olmasina gerek yok mesela elif olsun
// ve default olarak disari aktarilan tek bir tanim olabildigi icin o onu bulur.

// export{topla, cikar,text, user, users} export icin baska bi yontem
