// //string.js

// let name = 'Hong';
// let age = 20;
// let result = '성인';
// let obj = {
//   name: '길동',
//   bloodType: 'A',
//   show() {
//     return this.name + this.bloodType;
//   },
// }
// if (age >= 20) {
//   result = '성인';
// } else {
//   result = '미자';
// }

// result = age >= 20 ? '성인' : '미자';
// console.log(`내이름은${name=='Hong'}, ${age >=20 ? '성인':'미자'}`);

//indexOf('매개값')
let idx = 'hello, world'.indexOf('w');
console.log(idx);

// idx = "김성태 , 박명식, 홍길동, 유재석".indexOf('박명석'); // 값 없으면 -1 반환
// console.log(idx);

// let myFriends = ['김현태', '진짜김현태', '진짜진짜김현태', '가짜김현태', '김현태(진)'];
// myFriends.forEach((item, idx, ary) => {
//   if (item.indexOf('진') == 0) {
//     console.log(item);
//   }
// });
// // 원시데이터형. string, number, boolean,
// // steak/ heap

// // 문자열 <<->>문자객체 >>>> 문자열이 객체로의 변환이 자동으로 일어남

// //slice
// console.log('pizza, orange, cereals'.slice(-7).toUpperCase());
// console.log('pizza, orange, cereals'.substring(7, 13).toLowerCase());

// // //startsWith()
// // const code = "ABCDEFG";
// // console.log(code.startsWith("ABB"));
// // console.log(code.startsWith("abc"));
// // console.log(code.startsWith("ABC"));
// // console.log(code.startsWith("DEF", 3));

// //endsWith()
// const code2 = "ABCDEFGH"

// // console.log(code2.endsWith("DDD"));
// // console.log(code2.endsWith("fgh"));
// // console.log(code2.endsWith("FGH"));
// console.log(code2.endsWith("DEF", 6));

// // //includes()
// // console.log(code2.includes("BCD"));
// // console.log(code2.includes("abc"));

// // //repeat()
// // let hello = "hi";
// // console.log(hello.repeat(99));


// quiz1. 성별판별 함수.
const numAry = ["990101-1237874", "030303-3245475", "9803042324567"]
numAry.forEach((item) => {
  getGender(item);
})


function getGender(no) {
  let pos = -1; //성별위치.
  pos = no.length == 14 ? 7 : 6;
  console.log(no.charAt(pos));

  if (no.charAt(pos) == 1 || no.charAt(pos) == 3) {
    console.log('남자')
  } else {
    console.log('여자')
  }
}

// console.log();

// function getGender(no) {
//   // console.log(no.startsWith("1", 7));
//   let male = no.startsWith("1", 7);
//   let male1 = no.startsWith("3", 7);
//   let fem = no.slice("2", -7);
//   let fem1 = no.slice("4", -7);
//   if (male) {
//     console.log('남자입니다.');
//   }
//   if (male1) {
//     console.log('남자입니다.');
//   }
//   if (fem) {
//     console.log('여자입니다.')
//   }
//   if (fem1) {
//     console.log('여자입니다.')
//   }

// }
// // getGender();

// quiz .2
const emails = [
  'sadfasdf@oracle.com',
  'sadfowejpf@smugmug.com',
  'weofjpwof@pp.com',
  'weiojpjfwe@opjsdf.com'
];

function getId(mail) {
  let pos = mail.indexOf("@");
  console.log(mail.substring(0, pos));
}



emails.forEach((item) => {
  getId(item);
})

// getId();