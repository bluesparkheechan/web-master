//scope.js
//전역(global) vs 지역(local)
//블록단위 변수 = let or const
//var & let, const

let myAge = 20;

function showAge() {
  let myAge = 22;
  console.log(myAge + 1);
}
showAge();

{
  let myAge = 10;
  myAge += 1; // {} 안의 var는 global임. {} 안의 let은 local임.
  console.log(myAge);
}
console.log(myAge + 1);