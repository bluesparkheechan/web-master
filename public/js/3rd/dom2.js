// 네, 코드를 더 **현대적이고 관리하기 쉽게** 개선해 보았습니다. 주요 변경점은 다음과 같습니다.

//   * **데이터와 화면 분리:** `students` 배열 데이터가 변경될 때마다 화면 전체를 다시 그리는 `render` 함수를 만들어 데이터와 화면을 동기화했습니다.
//   * **이벤트 위임 (Event Delegation):** '삭제' 버튼마다 이벤트를 추가하는 대신, 부모인 `tbody`에 이벤트 리스너를 한 번만 등록하여 메모리를 아끼고 코드를 단순화했습니다.
//   * **ES6+ 문법 활용:** `forEach` 반복문, 화살표 함수(`=>`), 템플릿 리터럴(`` ` ``) 등을 사용하여 코드를 더 간결하고 가독성 좋게 만들었습니다.

// -----

// ### 주요 변경 사항 설명 📝

// 1.  **`render()` 함수 도입**

//       * 기존에는 추가(`add`)와 초기화(`createStdList`) 로직이 화면을 각각 따로 조작했습니다.
//       * 개선된 코드에서는 `render()`라는 단일 함수가 `students` 배열을 기반으로 **테이블 전체를 그려주는 역할**을 전담합니다. 데이터가 추가되거나 삭제되면, `students` 배열을 변경하고 `render()`를 호출하기만 하면 됩니다. 이는 React와 같은 최신 프레임워크의 핵심 동작 원리와 비슷합니다.

// 2.  **'삭제' 버튼 처리 (이벤트 위임)**

//       * 기존에는 `makeTr` 함수 내에서 생성되는 모든 버튼에 `addEventListener`를 추가했습니다. 학생이 100명이라면 100개의 이벤트 리스너가 생성됩니다.
//       * 개선된 코드에서는 테이블의 몸통인 `tbody`에 **단 하나의 이벤트 리스너**를 추가하고, 클릭된 요소가 '삭제' 버튼인지를 확인하여 처리합니다. 이 방식이 훨씬 효율적이고 코드가 깔끔해집니다.

// -----

// ### 개선된 전체 코드 ✅

// ```javascript
// // 1. 초기 데이터
let students = [{
  stdNo: 100,
  stdName: '홍길동',
  stdScore: 80
}, {
  stdNo: 200,
  stdName: '김길동',
  stdScore: 85
}];

// 2. 자주 사용하는 HTML 요소를 변수에 할당 (효율성)
const tbody = document.querySelector('#list tbody');
const addBtn = document.querySelector('#addBtn');
const stdNoInput = document.querySelector('#std_no');
const stdNameInput = document.querySelector('#std_name');
const stdScoreInput = document.querySelector('#std_score');

// 3. '추가' 버튼 이벤트 리스너
addBtn.addEventListener('click', () => {
  // 입력값이 비어있는지 확인
  if (!stdNoInput.value || !stdNameInput.value || !stdScoreInput.value) {
    alert('모든 값을 입력해주세요.');
    return;
  }

  // students 배열에 새로운 학생 데이터 추가
  students.push({
    stdNo: parseInt(stdNoInput.value), // 문자열을 숫자로 변환
    stdName: stdNameInput.value,
    stdScore: parseInt(stdScoreInput.value) // 문자열을 숫자로 변환
  });

  // 입력 필드 초기화
  stdNoInput.value = '';
  stdNameInput.value = '';
  stdScoreInput.value = '';

  render(); // 데이터가 변경되었으니 화면을 다시 그림
});


// 4. '삭제' 버튼 이벤트 리스너 (이벤트 위임)
tbody.addEventListener('click', (e) => {
  // 클릭된 요소가 '삭제' 버튼이 아니면 함수 종료
  if (!e.target.matches('button.btn-danger')) {
    return;
  }

  // 클릭된 버튼에서 가장 가까운 <tr> 요소를 찾음
  const tr = e.target.closest('tr');
  const stdNoToRemove = parseInt(tr.dataset.stdNo); // tr에 저장된 학생 번호 가져오기

  // filter를 사용해 해당 학생 번호를 제외한 새로운 배열을 만듦
  students = students.filter(student => student.stdNo !== stdNoToRemove);

  render(); // 데이터가 변경되었으니 화면을 다시 그림
});

/**
 * 5. 'students' 배열을 기반으로 화면(테이블)을 그리는 함수
 */
function render() {
  // tbody의 기존 내용을 모두 지움
  tbody.innerHTML = '';

  // students 배열을 순회하며 각 학생에 대한 <tr>을 만들어 추가
  students.forEach(student => {
    const tr = document.createElement('tr');
    // data-* 속성을 사용해 각 행에 고유한 학생 번호를 저장 (삭제 시 활용)
    tr.dataset.stdNo = student.stdNo;

    // 템플릿 리터럴을 사용해 HTML 구조를 더 쉽게 만듦
    tr.innerHTML = `
            <td>${student.stdNo}</td>
            <td>${student.stdName}</td>
            <td>${student.stdScore}</td>
            <td>
                <button class="btn btn-danger">삭제</button>
            </td>
        `;
    tbody.appendChild(tr);
  });
}

// 6. 초기 화면 로딩
render();