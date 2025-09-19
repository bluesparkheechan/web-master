// fetch.js
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