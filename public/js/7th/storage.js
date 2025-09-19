//storage.js
console.log(this);
localStorage.setItem('myName', '고라니');
localStorage.setItem('myInfo', "{'name': '고라니', 'age':'20'}");
let info = JSON.parse(localStorage.getItem("myInfo"));


localStorage.setItem("boardList")
JSON.stringify([{
    bno: 1,
    title: "연습글입니다.",
    content: "연습하고 있습니다.",
    writer: user01
  },
  {
    bno: 2,
    title: "연습글입니다.",

    content: "연습하고 있습니다.",

    writer: "user01"

  }
])
/* 게시판

localStorage: boradList (JSON.stringfy로 저장)
[{}]
*/