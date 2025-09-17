// object.js

let obj = {}
let obj2 = obj;

console.log(obj == obj2);

let obj3 = {}
obj.name = "Hong";
obj.age = 20;

obj3.name = 'Hong';
obj3.age = 20;
//원시데이터 타입은 스택 영역에 값을 포함하지만
//객체에서는 힙 영역에 값을 따로 저장하고, 메모리상의 주소값은 다르기 때문에 
//두 객체의 비교에서 false가 나올 수 밖에 없음.

//그러나 두 객체의 "@@속성@@"에 대한 비교에서는 True가 나올 수 있다.
console.log(obj.name == obj3.name);


// 원시 데이터 타입.
let str1 = 'Hong';
let str2 = 'Hong';
let ary = [];
console.log(typeof obj3, typeof str1, typeof ary);

//변수의 유형은 값이 결정되는 순간 정해짐.
//타입 결정하는게 널널함..
str1 = 10;
console.log(typeof str1);
str2 = '10';
//데이터 타입은 다르지만 문자값이 똑같기 때문에 True가 나옴..
console.log(str1 == str2);
//데이터 타입까지 체크하려면 ===로 비교함.
console.log(str1 === str2);


// 함수 정의식
// function sum(num1, num2) {
//   return num1 + num2;
// }
// 함수 표현식
// const sum = function (num1, num2) {
//   return num1 + num2;
// }
// 두개 똑같은 말임...


// 줄임 표현식(=> 화살표함수)
const sum = (num1 = 0, num2 = 0) => num1 + num2;

console.log(sum(sum(1, 3), sum(4)));

// [23, 10, 17, 45, 81, 99].forEach((item, idx, ary) => console.log(item));