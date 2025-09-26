//covid.js
const url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=061cf48db753caef8d20cc1a87b10b4708bf8bbd415116430e3c77b6399cada7`;

let total = []; // 전체 센터 목록을 담아두는 배열

fetch(url)
  .then(resp => resp.json()) // json포맷 => 자바스크립트 객체
  .then(result => {
    total = result.data;
    showPageList(3);
    // total.filter(item => item.id <= 10)
    //   .forEach((center) => {
    //     let tr = makeRow(center);
    //     document.querySelector("#centerList").appendChild(tr);
    //     // console.log(center)
    //   });

  })
  .catch(err => console.log(err));


//건 수에 따라 페이징 목록 생성 =>> 1,2,3,4,5,6,7,8,9,10,....,29
function makePagingList() {
  const paging = {
    currPage: 1,
    startPage: 1,
    endPage: 10,
    prev: false,
    next: false,
    initPage(page = 1, totalCnt = 284) {
      let realend = Math.ceil(totalCnt / 10);
      this.currPage = page; // 13
      this.endPage = Math.ceil(page / 10) * 10;
      this.startPage = this.endPage - 9;
      this.prev = this.startPage == 1 ? true : false; // 이전 10개 페이지가 존재하는지 여부
      // this.next = this.end > realend ? realEnd : this.end; // 이후 10개 페이지가 존재하는지 여부
      this.next = this.endPage > realend ? false : true;
    },
  }
  paging.initPage(5);
  console.log(paging);

  // ul target
  let target = document.querySelector('ul.pagination');
  target.innerHTML = "";
  //이전 페이징 생성
  if (paging.prev) {
    let li = document.createElement("li");
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = "Previous";
    a.className = 'page-link'
    a.setAttribute('href', "#")
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement("li");
    li.className = "page-item disabled";
  }

  for (let s = paging.startPage; s <= paging.endPage; s++) {
    let li = document.createElement('li')
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = s;
    a.className = 'page-link'
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  }
  if (paging.next) {
    let li = document.createElement("li");
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = "next";
    a.className = 'page-link'
    a.setAttribute('href', "#")
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement("li");
    li.className = "page-item disabled";
  }

}
makePagingList(9);
// 링크 페이지 생성

pageLinkEvent();



// 화면의 a 링크 생성.
function pageLinkEvent() {
  document.querySelectorAll('a.page-link').forEach(item => {
    //이벤트 등록
    item.addEventListener('click', function (e) {
      e.preventDefault(); // 기본기능차단.
      let page = item.innerHTML;
      showPageList(page);
      console.log('실행됨')
    });

  });

};


// 페이지 목록 출력
function showPageList(page = 1) {

  //초기화.
  document.querySelector("#centerList").innerHTML = '';

  let start = (page - 1) * 10
  let end = page * 10;
  total.filter(item => item.id > start && item.id <= end)
    .forEach((center) => {
      let tr = makeRow(center);
      document.querySelector("#centerList").appendChild(tr);
      // console.log(center)
    });
}




// 센터 -> 한건 화면에 출력
function makeRow(center) {
  const fields = ['id', 'centerName', 'address', 'sido'];
  let tr = document.createElement("tr");
  for (let field of fields) {
    let td = document.createElement("td");
    td.innerHTML = center[field];
    tr.appendChild(td)
  }
  return tr;
}

pageLinkEvent();