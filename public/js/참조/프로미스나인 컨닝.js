// 함수의 !!!!기능!!!!을 매개값으로 받겠다는것임.......


console.log(result);

const promise = new Promise(function (resolve, reject) {
  resolve('ok');
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