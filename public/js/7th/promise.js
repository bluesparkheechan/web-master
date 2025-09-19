//promise.js
//콜백함수 => 비동기적 함수를 순차적으로 실행.
//콜백 지옥을 부숴보자 

// 매개값으로 함수를 넣음.
function callFnc(x1 = 0, x2 = 0, anonymousFnc) {
  return anonymousFnc(x1, x2);
}
let result = callFnc(10, 20, function (a, b) {
  return a * b;
});
// 함수의 !!!!기능!!!!을 매개값으로 받겠다는것임.......


console.log(result);

const promise = new Promise(function (resolve, reject) {
  reject('NG');
}); // promise 객체
//객체 생성하는 방법. 1.{}  ,   2.new Object()

/////////////////프로미스의 메서드//////////////////////

// promise가 정상적  으로 실행이 되면 thne 안에 있는 함수 실행
promise
  .then(function (response) {
    console.log(response);
  })
  .then(function (result) {
    console.log(result);
  })
  // reject라는 메서드가 실행이 되었을때 catch 안에 있는 함수 실행
  .catch(function (err) {
    console.log(err)
  })
////////then 이나 catch를 사용하여 코드를 순차적으로 볼 수 있는 이점////////

// fetch
fetch('http://localhost:3000/posts') ///fetch는 promise의 객체반환.
  .then(function (response) { //.then 사용가능....!
    console.log(response);
    return response.json(); // 자바스크립트의 객체변경 시켜주는 함수 >>json();
  }) // then 안에 return 써서 다시 객체로 만들어 주었음

  .then(function (result) {
    console.log(result);
  })

  .catch(function (err) {
    console.log(err);
  });
//프로미스 함수를 사용하여 순차적으로 함수를 볼 수 있는것이 fetch함수임////