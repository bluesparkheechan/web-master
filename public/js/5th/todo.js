// todo.js

// *
// **
// ***
// ****
// *****
// console에다가 반복문 써서 출력해보삼..
// let i = 1;

// while (i <= 5) { //while 블럭.
//   i++;
//   if (i = 1) {
//     console.log('*');
//   }
//   if (i = 2) {
//     console.log('**');
//   }
//   if (i = 3) {
//     console.log('***');
//   }
//   if (i = 4) {
//     console.log('****');
//   }
//   if (i = 5) {
//     console.log('*****');
//   }
//   break;
// }

// let num = ''
// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < i + 1; j++) {
//     num += '*';
//   }
//   console.log(num);
// }

// let num1 = ''
// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < 5; j++) {
//     num1 += '*'
//   }
//   console.log(num1);
//   num1 = ''
// }

let num = ''
for (let i = 0; i < 5; i++) {
  for (let j = i; j < 5; j++) {
    for (let k = j; k < 5; k++) {
      num1 += '*'
    }
  }
  console.log(num1);
  num1 = '';
}