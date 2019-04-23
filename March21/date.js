// contstructing date Objectives

const d = new Date();
console.log(d); // gregorian date

console.log(d.valueOf()); // numeric value of the date



const oldDate = new Date(1965, 0);
const ericBday = new Date(1998, 8,19);
console.log(ericBday);

//months in javascript behave like indexes in an array (start at zero for first index) Ex. 0 = January, 1 = February

const nd = new Date(Date.UTC(2006, 2, 1));
nd.getFullYear();
nd.getMonth();
nd.getDate();
nd.getDay();  // days of the week (0-6) sunday monday etc.
nd.getHours();
nd.getMinutes();
nd.getSeconds();
// nd.getMiliseconds();
console.log(nd.getDay());



const d1 = new Date(1998,9,18);
const d2 = new Date(1999, 9,18);

function getDate() {
  if  (d1 > d2){
  return true;
  }
}
