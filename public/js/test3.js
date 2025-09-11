/*
 *test3.js
*/

//prompt함수를 활용, 2개의 숫자값을 입력.
// 두 수의 합이 3의 배수인지 / 3의 배수가 아닌지 판별

let num1 = prompt("숫자를 입력하세요")
let num2 = prompt("숫자를 입력하세요")
let result = parseFloat(num1) + parseFloat(num2);
if((num1+num2) % 3 == 0){
  console.log(result + "는 3의 배수입니다.");
  
}
else{console.log(result + "는 3의 배수가 아닙니다")}
