// 1. pepe@pepe.es
//needs group of letters, an arroba, group of letters, a stop and es
let test1 = "pepe@pepe.es";
let regExp = /[a-z]{2,}@{1}[a-z]{2,}(.es)/i;
console.log(regExp.test(test1));

// 2. pe.pe_pepe-23@pepe.es
let test2 = "pe.pe_pepe-23@pepe.es";
let regExp2 =
  /[a-z]{2,}[.][a-z]{2,}[_][a-z]{2,}[-][0-9]{2,}@{1}[a-z]{2,}[.][a-z]{2,}/i;
console.log(regExp2.test(test2));

// 3. pe.pe_pepe-23@pe_p-e.es
let test3 = "pe.pe_pepe-23@pe_p-e.es";
let regExp3 =
  /[a-z]{2,}[.][a-z]{2,}[_][a-z]{2,}[-][0-9]{2,}@{1}[a-z]{2,}_[a-z]-[a-z][.][a-z]{2,}/i;
console.log(regExp3.test(test3));

// pe.pe_pepe-23@pepe.es.com
let test4 = "pe.pe_pepe-23@pepe.es.com";
let regExp4 =
  /[a-z]{2,}[.][a-z]{2,}[_][a-z]{2,}[-][0-9]{2,}@{1}[a-z]{2,}[.][a-z]{2,}[.][a-z]{2,}/i;
console.log(regExp4.test(test4));
