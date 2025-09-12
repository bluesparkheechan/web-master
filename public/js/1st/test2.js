/*
 *test2.js
 */

let friend1 = {
  name: "박규태",
  height: 185
}

let friend2 = {
  name: "홍길동",
  height: 185
}

// let result = friend1.height < friend2.height;
// if (result) {
//   console.log("박규태가 작다");

//   result = friend1.height > friend2.hegith;
// }
// if (result) {
//   console.log("박규태가 크다");
// }
if(friend1.height > friend2.height){
  console.log(friend1.name+'가 크다');
}
if(friend1.height < friend2.height){
  console.log(friend2.name+'이 크다');
}
if(friend1.height == friend2.height){
  console.log(friend1.name, friend2.name+'은 키가 같다');
}
// 박규태가 김민식 보다 크냐?
// 

let num3 = prompt("숫자를 입력하세요: ");
if(num3%2==1){
console.log("홀수");
}
else{ console.log("짝수"); }
// if(num3%2==0){
// console.log("짝수")
// }
