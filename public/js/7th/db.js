// db.js

// 게시글 데이터 하나를 받아 화면에 표시할 DOM 요소를 만드는 함수
function createPostElement(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');
  div.classList.add('post-item');

  // 각 필드(id, title, author)에 대한 span 요소를 만들어 div에 추가
  fields.forEach(field => {
    let span = document.createElement('span');
    span.textContent = post[field]; // innerHTML 대신 textContent 사용이 더 안전합니다.
    span.className = 'data-' + field;
    div.appendChild(span);
  });

  // (옵션) 클릭 이벤트 등 필요한 이벤트를 여기에 추가할 수 있습니다.
  // div.addEventListener("click", ...);

  return div;
}

// 1. 페이지 로딩 시 전체 목록을 가져와 화면에 표시
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      // createPostElement 함수를 사용해 각 게시글 요소를 만듭니다.
      const postElement = createPostElement(post);
      document.querySelector('.data-container').appendChild(postElement);
    });
  })
  .catch(err => console.log('목록 로딩 에러:', err));


// 2. '추가' 버튼 클릭(submit) 이벤트 처리
document.querySelector('div.container>form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    let titleInput = document.querySelector('[name="title"]');
    let authorInput = document.querySelector('[name="author"]');
    let title = titleInput.value;
    let author = authorInput.value;

    if (!title || !author) {
      alert('제목과 작성자를 모두 입력해주세요.');
      return;
    }

    // 서버에 새로운 게시글 추가 요청 (POST)
    fetch('http://localhost:3000/posts', {
        method: 'POST', // POST 요청 명시
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author
        }) // 보낼 데이터
      })
      .then(response => response.json())
      .then(newPost => { // 서버로부터 방금 추가된 게시글 데이터를 받음 (newPost)
        console.log('추가 완료:', newPost);

        // ✨ 바로 이 부분입니다!
        // 서버로부터 받은 새 게시글 데이터로 화면에 표시할 요소를 만듭니다.
        const postElement = createPostElement(newPost);

        // 목록의 맨 앞에 새로운 글을 추가하려면 prepend, 맨 뒤는 append
        document.querySelector('.data-container').prepend(postElement);

        // 입력 필드 초기화
        titleInput.value = '';
        authorInput.value = '';
      })
      .catch(err => console.log('추가 요청 에러:', err));
  });