//db.js

//이벤트.
document.querySelector('div.container>form') // >는 바로 자식요소에서만 찾는거 
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단
    addPost();
  });

//글 등록
function addPost() {

  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  const xhtp = new XMLHttpRequest();
  xhtp.open('post', 'http://localhost:3000/posts', );
  // post 요청일 때, 요청 헤더 : 컨텐트 형식 지정.
  xhtp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhtp.send(JSON.stringify({
    title: title,
    author: author
  }));
  xhtp.onload = function () {
    let result = JSON.parse(xhtp.responseText);
    let div = makeRow(result);
    console.log(result);
    document.querySelector('#data-container').appendChild(div);
    //초기화
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
  }
}
//게시글 한 건에 대한 row 생성하는 함수.
function makeRow(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');
  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = post[fields[i]];
    console.log(post[fields[i]]);
    span.setAttribute('class', 'data-' + fields[i]);
    div.appendChild(span);

  };
  return div; // 
}

const xhtp = new XMLHttpRequest();

xhtp.open('get', 'http://localhost:3000/posts') //http://localhost:3000/posts 링크로 요청이 오면 
xhtp.send();
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  data.forEach(function (item, indx2, ary) {
    let div = makeRow(item);
    document.querySelector('#data-container').appendChild(div);
  });
}

// 객체의 속성.
const person = {
  name: 'Do',
  birth: '1998-09-19',
  phone: '010-9999-9999'
}
person.name;
person['birth'];
console.log(person['birth']);
const prop = 'phone';
person[prop];
console.log(person[prop]);