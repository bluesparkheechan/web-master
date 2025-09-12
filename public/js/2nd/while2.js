//while2.js
//학생 점수를 입력 >>while 반복문 >>exit 넣으면 출력
//while 반복문 사용하여 입력받은 총 점수 구하기.
// let userValue = prompt("숫자를 입력하세요. 종료하려면 exit");
// let userValue = 'exit'

let sum = 0;

while (true) {
  userValue = prompt( 'exit를 넣으면 명륜진사갈비를 부수겠다.');
  if (userValue == 'exit') {
    break;
  }
  else {
    sum = sum+parseInt(userValue);
  }
  
  console.log(parseInt(userValue));

}

console.log('명륜진사갈비,,,부쉈다고,,,,,,');
console.log(`합계=${sum}`);