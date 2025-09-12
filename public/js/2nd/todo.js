// todo.js

// 2개의 값 입력받도록 ... 화면구성.(html)
// 계산하는 기능 구현.
// 사칙연산 
// plus, minus, multiply, divide >> 함수이름.

let result = 0;
// let num1 = 0;
// let num2 = 0;
function calculate(){
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let col = document.querySelector("#col1").value;
  console.log(col)
  if(col=='+'){
    result=num1+num2;
  }
  if (col=='-'){
    result=num1-num2;
  }
  if (col=='*'){
    result=num1*num2;
  }
  if (col=='/'){
    result=num1/num2;
  }
  console.log(result);
  document.querySelector("#num2").value=result;
 }

