/*
  condition.js
*/

console.log("연산자 커밋 이후");
//점수가 90보다 크면 "아주 잘했습니다"
//점수가 80보다 크면 "잘했습니다"
//점수가 70보다 크면 "보통입니다"
//점수가 60보다 크면 "노력하세요"
//이외에는 "낙제입니다"
function show_score() {
  let score = document.querySelector('#user_value').value;
  if (score >= 90) {
    console.log("아주 잘했습니다.")
  } else if (score >= 80) {
    console.log("잘했습니다")
  } else if (score >= 70) {
    console.log("보통입니다")
  } else if (score >= 60) {
    console.log("노력하세요")
  } else {
    console.log("낙제입니다.")
  }
}

function calculate() {
  let first = parseInt(document.querySelector('#user1').value);
  console.log(document.querySelector('#user1').value);
  let last = parseInt(document.querySelector('#user2').value);
  console.log(document.querySelector('#user2').value);
  let opr = document.querySelector('#oper').value;
  let result = 0; // 결과값을 저장.
  console.log(first, last, opr);
  //조건문.
  switch (opr) {
    case '+':
      result = (first) + (last); break;
    case '-':
      result = (first) - (last); break;

    case '*':
      result = (first) * (last); break;
    case '/':
      result = (first) / (last); break;
  }
  document.querySelector("#result").value=result;


}