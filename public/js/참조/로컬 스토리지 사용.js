// storage.js
console.log(window);

//아이템(students)
//학번:100, 이름:홍길동, 점수:80
//학번:200, 이름:박철수, 점수:85
//학번:300, 이름:김민우, 점수:90

localStorage.setItem("studentInfo", JSON.stringify(
  [{
    sno: 100,
    sname: '홍길동',
    score: 80
  }, {
    sno: 200,
    sname: '박철수',
    score: 85
  }, {
    sno: 300,
    sname: '김민우',
    score: 90
  }]));

// localStorage.setItem("studentInfo", JSON.stringfy(students));
let data = JSON.parse(localStorage.getItem("studentInfo"));

console.log(data);
data.forEach((item) => {
  let fields = ['sno', 'sname', 'score'];
  let div = document.createElement("div");
  for (let prop of fields) {
    let span = document.createElement("span");
    console.log(`prop`, prop);
    span.innerHTML = item[prop];
    console.log(`itemprop`, item[prop]);
    span.setAttribute("class", "data-" + prop);
    // div.apenchild(span);
    div.appendChild(span);
  }
  document.querySelector(".data-container").appendChild(div);
})