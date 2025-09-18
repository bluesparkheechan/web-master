// for.js

//for..of 반복
let numAry = [10, 13, 44, 53, 91];
let sum = 0;
// numAry의 개수만큼 반복
for (let num of numAry) {
  sum += num;
}
console.log(sum);

//for .. in.. 객체..
let student = {
  sno: 100,
  sname: '고라니',
  score: 99
};
for (let prop in student) {
  console.log(prop, student[prop]);
}