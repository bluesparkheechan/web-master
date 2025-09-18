// 이벤트 리스너: 폼 제출 시 addPost 함수 실행
document.querySelector('div.container > form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 제출 기능 차단
    addPost();
  });

// 글 등록 함수
function addPost() {
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;

  const addXhtp = new XMLHttpRequest();
  addXhtp.open('post', 'http://localhost:3000/posts');
  addXhtp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  addXhtp.send(JSON.stringify({
    title: title,
    author: author
  }));
  addXhtp.onload = function () {
    let result = JSON.parse(addXhtp.responseText);
    let div = makeRow(result);
    document.querySelector('#data-container').appendChild(div);

    // 입력 필드 초기화
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
  }
}

// 게시글 한 건에 대한 HTML row를 생성하는 함수
function makeRow(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');
  div.classList.add('post-item'); // CSS 선택을 위해 클래스 추가

  // div에 클릭 이벤트 추가(댓글 목록 가져오기)
  div.addEventListener("click", function () {
    const target = this;
    let id = post['id'];

    showComments(id, target)
    console.log(id);

  });

  // post의 id, title, author 정보를 span으로 만들어 div에 추가
  fields.forEach(field => {
    let span = document.createElement('span');
    span.innerHTML = post[field];
    span.classList.add('data-' + field);
    div.appendChild(span);
  });

  return div;
}

// --- 초기 게시글 목록을 불러오는 부분 ---
const postsXhtp = new XMLHttpRequest();
postsXhtp.open('get', 'http://localhost:3000/posts');
postsXhtp.send();
postsXhtp.onload = function () {
  let data = JSON.parse(postsXhtp.responseText);
  console.log(data);

  data.forEach(item => {
    let div = makeRow(item);

    document.querySelector('#data-container').appendChild(div);
  });
}

// --- person 객체 관련 코드는 원래 정상적으로 작동합니다 ---


function showComments(id, target) {
  const postsXhtp = new XMLHttpRequest();
  postsXhtp.open('get', 'http://localhost:3000/comments');
  postsXhtp.send();
  postsXhtp.onload = function () {
    let data = JSON.parse(postsXhtp.responseText).filter(item => {
      return item.postId == id;
    });
    console.log(data);
    deleteComments();
    data.forEach(item => {
      let div = makeRowComments(item);
      target.appendChild(div);
    });
  }

}

function makeRowComments(post) {
  let fields = ['id', 'content', 'postId'];
  let div = document.createElement('div');
  div.setAttribute('class', 'com');
  // div.classList.add('post-item'); // CSS 선택을 위해 클래스 추가

  // div에 클릭 이벤트 추가(댓글 목록 가져오

  // post의 id, title, author 정보를 span으로 만들어 div에 추가
  fields.forEach(field => {
    let span = document.createElement('span');
    span.innerHTML = post[field];
    span.classList.add('data-' + field);
    div.appendChild(span);
  });

  return div;
}

function deleteComments() {
  let ary = document.querySelectorAll('.com');
  ary.forEach(item => {
    item.remove();
  })
}