// array.js


// 배열의 값이 문자열일때
let fruits = ['사과', '복숭아', '수박', '참외'];
//   인덱스 =    0       1        2       3
console.log(fruits[0]);
fruits[1] = '멜론';
console.log(fruits[1]);
// 배열은 반복문에 잘 쓰임
console.clear(); // log 지우기.

for (let i = 0; i < 4; i++) {
  console.log(fruits[i]);
}

// 배열의 값이 정보일 때

let student = [{
  stdNo: 100,
  stdName: '김민기',
  score: 80
}, {
  stdNo: 200,
  stdName: '김민준',
  score: 85
}, {
  stdNo: 300,
  stdName: '김충식',
  score: 88
}];

let str = `<ul>`;
for (let i = 0; i < 3; i++) {
  console.log(student[i].stdName);
  str +=`<li>학생번호: ${student[i].stdNo}, 이름: ${student[i].stdName}, 학생 점수: ${student[i].stdName} </li>`;
} // 뒤에 '.속성'을 붙이면 해당 속성만 표시하는것도 가능.
str += `</ul>`;
document.writeln(str);

str = str +``;
str +=``;