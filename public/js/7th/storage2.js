// storage.js
console.log(window);

//아이템(students)
//학번:100, 이름:홍길동, 점수:80
//학번:200, 이름:박철수, 점수:85
//학번:300, 이름:김민우, 점수:90

// localStorage.setItem("studentInfo", JSON.stringify(
//   [{
//     sno: 100,
//     sname: '홍길동',
//     score: 80
//   }, {
//     sno: 200,
//     sname: '박철수',
//     score: 85  
//   }, {
//     sno: 300,
//     sname: '김민우',
//     score: 90
//   }]));

// localStorage.setItem("studentInfo", JSON.stringfy(students));


document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let score = document.getElementById('score').value;
  // 입력값 확인
  if (!sno || !sname || !score) {
    alert("값을 입력하시오")
    return;
  }

  let data = JSON.parse(localStorage.getItem("studentInfo"));
  data.push({
    sno,
    sname,
    score
  });
  if (!confirm("저장하시겠습니까?")) {
    alert('취소했습니다.');

    return;
  }
  console.log(data.filter((item) => item.sno == sno))
  console.log(data.filter((item) => item.sno == sno).length)

  if (data.filter((item) => item.sno == sno).length) {
    alert("중복")
    return;
  }



  localStorage.setItem("studentInfo", JSON.stringify(data));
  loadData();
});




loadData = () => {
  document.querySelector(".data-container").innerHTML = '';
  let data = JSON.parse(localStorage.getItem("studentInfo"));
  // console.log(data);
  data.forEach((item) => {
    let fields = ['sno', 'sname', 'score'];
    let div = document.createElement("div");
    for (let prop of fields) {
      let span = document.createElement("span");
      // console.log(`prop`, prop);
      span.innerHTML = item[prop];
      // console.log(`itemprop`, item[prop]);
      span.setAttribute("class", "data-" + prop);
      // div.apenchild(span);
      div.appendChild(span);
    }

    let btn = document.createElement('button');
    btn.innerHTML = '수정';
    btn.addEventListener('click', function (e) {
      //search: sno 저장.
      localStorage.setItem('search', item.sno);
      location.href = "update.html";

    })
    div.appendChild(btn);

    document.querySelector(".data-container").appendChild(div);
  })
}

loadData();