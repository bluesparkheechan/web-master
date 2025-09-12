/*
*test.js
*/
// 학생(학생번호: 101, 학생이름: 김민수, 영어: 87점, 수학: 90점)

let student = {
  학생번호: 101, name: "김민수", 영어: 87, 수학: 90
}
console.log("이름은 "+student.name+" 입니다");
student.name="김만수";
  console.log(student.name);
console.log("김만수의 영어점수는 "+ student.영어);

let fruits = ["사과", "복숭아", "수박"];
console.log("좋아하는 과일: "+fruits);
console.log("내가 좋아하는 과일 첫번째: "+fruits[0]);