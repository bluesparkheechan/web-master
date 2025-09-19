// ajax.js

// 동기방식 vs 비동기방식
//  동기방식은 위에서부터 차례대로 코드를 실행하는 방식
//  비동기 방식은 차례대로 코드 실행하고 call queue에 있는것 실행.
// Asynchronous Javascript And XML (Json으로 데이터 주고받음) 
// ajax는 처리방식이름임.(Javascript는 ajax 방식으로 데이터를 처리함)
////////////////////////////////////////////////////////////////
function backup() {

  //setTimeout(명령, 실행시점)의 형식 .... 콜백함수라고 함
  setTimeout(function () {
    console.log('첫번째 함수');
  }, 1000); // 1초를 기다렸다가 함수실행
  setTimeout(function () {
    console.log('두번째 함수');
  }, 2000); // 2초를 기다렸다가 함수실행
  setTimeout(function () {
    console.log('세번째 함수');
  }, 500); // 0.5초를 기다렸다가 함수 실행
  // 동기처리일 시 3.5초가 걸리지만, 비동기 처리이기 때문에 2초만에 작업 완료

  //setTimeout(명령, 실행시점)의 형식 .... 콜백함수라고 함
  setTimeout(function () {
    setTimeout(function () {
      setTimeout(function () {
        console.log('세번째 함수');
      }, 500);
      console.log('두번째 함수');
    }, 2000); // 2초를 기다렸다가 함수실행
    console.log('첫번째 함수');
  }, 1000); // 1초를 기다렸다가 함수실행

  // 함수 안에 함수를 넣어 동기 처리를 할 수 있음 ( 1>>2>>3 순으로 실행됨)
};


////////////////////////////////////////////////////////////////////////

function backup() {

  let members = []; // 그냥 코드임
  const xhtp = new XMLHttpRequest(); // 
  xhtp.open('get', '../5th/data.json');
  xhtp.send();
  xhtp.onload = function () {
    members = JSON.parse(xhtp.responseText); // 비동기작업이라 통과됨
    console.log(members);
  };
}


///////////////////////////////////////////////////////////////////////