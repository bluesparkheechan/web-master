// destructuring.js
const person = {
  name: "홍길동",
  age: 20,
};

let {
  name,
  age
} = person;
console.log(name, age);
// let name = person.name; //홍길동
// let age = person.age; //20

const numAry = [10, 30, 45];
let [n1, n2, n3] = numAry; // 배열 디스트럭쳐링
console.log(n1, n2, n3);

// 배열메소드 : forEach(), map(): A -> A', filter() reduce()
const stdAry = [{
  sno: 1,
  name: "짭현태",
  score: 80
}, {
  sno: 2,
  name: "김현태",
  score: 100
}, {
  sno: 3,
  name: "진짜현태",
  score: 10
}];
const newAry = stdAry.map(item => {
  const { // 이름 바꾸려면 sno:??, name:?? 식으로 콜론 붙이면됨 
    sno,
    name
  } = item; // 객체 디스트럭쳐링
  return {
    sno,
    name
  };
});
console.log(newAry);