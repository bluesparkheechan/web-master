
// 자바스크립트 영역.
// 1. 값을 저장 하는 역할 = 변수를 활용.
// 2. 기능을 부여하는 역할 = 함수를 활용.

//let 은 변수를 넣을 때 사용
let user_id = "user01"; //문자열(변수)
let user_age = 20; // 숫자(변수).
let is_child = false; // ture or false.
//function은 함수(기능을) 넣을 때 사용
function show_info() {
  console.log("회원의 아이디는 " + user_id);
}
show_info(); //  show_info()를 괄호 밖에 하나 더 써서 함수 실행.
// h3 태그의 Hellow World >> 안녕 ! 으로 바꿔봄
function changeword() {
  //화면 요소를 선택 해야함. = 함수 querySelector 사용
  document.querySelector('#World').innerHTML = "안녕!";
}
function changeValue(){
  let num = 78;
  console.log(document.querySelector("#user_value").value = num);
  document.querySelector("#user_value").value = num;
}

