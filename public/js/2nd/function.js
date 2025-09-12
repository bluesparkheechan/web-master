// function.js
// 함수 : 코드의 묶음.
// 반복되는 작업의 시행

// 
// function calculate() {
// let num1=0, num2=0;
//   num1 = prompt("값을 입력하쇼")
//   num2 = prompt("값을 입력하쇼")

//   let result = (num1 + num2) * 10;
//   result = parseInt(result) % 2;

//   console.log(`결과는 ${parseInt(result)}`);
// }
// calculate();

//10+5,콘솔출력 : 기능을 정의.


//전역(global)
let n1 = 10;
let n2 = 20;
const n3 = 3.14; //변경 안되는 숫자(상수)
// var n3 = 300;
{
  n1 = 2000;
  n2 = 21;
  console.log(`블록영역 ${n2}`)
}
// var n3 = 400;
// console.log(`머꼬${n3}`)
function varFunc() {
  let n1 = 100;
  console.log(`local => ${n1}`);
} //local 값은 함수 밖에 나가는 순간 적용X
console.log(`global => ${n1}`);
varFunc(); // 함수 호출

// function plus(똥1, 똥2) {   // plus 함수의 지역(local)
//   let 똥1=parseInt(prompt('값을 입력하쇼');)
//   let 똥2=parseInt(prompt('입력하라고');)
//   let result = 똥1 + 똥2;

//   result = parseInt(똥1 + 똥2)
//   console.log(`합계는${result}`);
// }
// plus(똥1, 똥2);   //function이라는 것은 변수를 통해 결과만 달라지는 같은 기능을 반복시키는 것.