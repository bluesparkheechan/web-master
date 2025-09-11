/*
*operator
*/
let num1 = 10;  ///변수 값을 정해주면서 변수를 선언하는것을 변수를 초기화 한다고 함.
let num2 = 20;  
let result;
result = num1 + num2;
// console.log("결과는 "+ num1 + num2); /// 결과는 1020 으로 표시됨 >> 첫번째가 문자이기 때문에 num1과 num2도 문자열로 인식했기 때문
console.log("결과는 "+(num1/num2) +" 입니다.");
console.log(num1 + num2 + " 입니다.") /// 30입니다로 표시됨 >> 첫번째가 문자열이기 때문에 10+20 먼저 계산하고 문자열을 입력해줌.

num1 = 425;
result = num1 % num2;
console.log("나머지" + result);

num1 = 3;
console.log(num1%2); // 홀짝 판별

result = num1 % 2 == 0; // false
console.log(result)

//조건문 if(조건 == ) {console.log(결과값)}  numb1 < num2 => true/false

if(result) {console.log("홀수입니다")

}
if (num1 % 2 == 0) {
  console.log("짝수입니다."); //실행x
}
if (num1 % 2 == 1) {
  console.log("홀수입니다."); //실행o
}
console.log(num1<num2)
