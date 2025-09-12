/*
 * variable.js
 */
// 변수 단어 조합할때 소문자로 시작해서 두번째 단어나 세번째 단어 대문자로시작
let myName = "박희찬"; //문자형
let myAge = 20; //숫자형
let pets = [{
  name: "야옹이",
  age: 3
}, {
  name: "멍멍이",
  age: 4
}];
//배열형 
// []는 둘 이상의 것을 하나의 변수에 담을 수 있게함 = 배열 기호
// []의 순서는 0번 부터 시작함.

console.log(pets[0]);
let myFriend = {
  name: "홍길동",
  age: 20,
  phone: "010-1234-5678",
  address: "대구 중구 100번지"
} // {} = 객체 속성 값
// console.log(myFriend.name); // ( 변수(객체).속성 )
// console.log(myFriend.age);
// console.log(myFriend.phone);

console.log(pets[0].age);
pets[0].age=2;
console.log(pets[0].age);