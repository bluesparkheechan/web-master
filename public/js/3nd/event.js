// event.js
// 이벤트를 등록할 요소.

// document.querySelector('button') // 태그에다가 querySelector 달면 첫번째 버튼에만 이벤트 걸림
// .addEventListener('click',
//   function(){alert('addBtn이 클릭됨.')}
// );
console.log();
let students = [{
  stdNo: 100,
  stdName: '홍길동',
  stdScore: 80
}]; // 학생정보 지정. student.length 

// 이벤트들..

//첫번째 이벤트
document.querySelector('button#addBtn')
  .addEventListener('click', function () {
    // 사용자의 입력값.
    let sno = document.querySelector('#std_no').value;
    let sname = document.querySelector('#std_name').value;
    let score = document.querySelector('#std_score').value;
    // 필수값 입력.
    if(sno == ''||sname ==''||score==''){
      alert('값을 입력하세요');
      return;
    }

    students[students.length] = {
      stdNo: sno,
      stdName: sname,
      stdScore: score
    }
    console.log(students);
    createStdList(); // 입력항목 초기화.
    document.querySelector('#std_no').value = '';
    document.querySelector('#std_name').value = '';
    document.querySelector('#std_score').value = '';

  });
  //수정이벤트..
  document.querySelector('.addBtn') //선택자.
  .addEventListener('click', function () {
    // 목록에서 tr 전체선택.
    // 찾을 학생정보)(sno), 변경할 학생점수(score)
   
    let sno = document.querySelector('#std_no').value;
    let score = document.querySelector('#std_score').value;
    let nodeList = document.querySelectorAll('#list tbody tr');
    for(let i=0; i<nodeList.length; i++){
      console.dir(nodeList[i]);  // td .innerHTML ,td,td .innerHTML,td
    
    if(nodeList[i].children[0].innerHTML== sno){
      // console.log(100);
      nodeList[i].children[2].innerHTML=score;
    }
    }
    

  })

// 함수들..
// 배열값을 활용해서 학생목록 출력.
function createStdList() {
  let str = ``;
  for (let i = 0; i < students.length; i++) {
    str += `<tr onclick='showInfo(event)'><td>${students[i].stdNo}</td>
      <td>${students[i].stdName}</td>
      <td>${students[i].stdScore}</td>
      <td><button class="btn btn-danger" onclick='removeRow(event)'>삭제</button></td></tr>`;
  }
  document.querySelector('#list tbody').innerHTML = str;

} //end of creatStdList().
createStdList();

// 학생정보 삭제하는 함수
function removeRow(e) {
  (e.target.parentElement.parentElement.remove());
  console.log(students);
}
// 학생 정보를 입력화면에 출력
function showInfo(e){
  // console.dir(e.target.parentElement.children[0].innerHTML);
  console.dir(e.target.parentElement.children[0].innerHTML);
  console.dir(e.target.parentElement.children[1].innerHTML);
  console.dir(e.target.parentElement.children[2].innerHTML);
  console.dir(e.target.parentElement.children[3].innerHTML);
  // console.dir(e.target.parentElement.children[0].innerHTML);
  // 학생번호 -
  document.querySelector('#std_no').value=e.target.parentElement.children[0].innerHTML
  // 학생이름 -
  document.querySelector('#std_name').value=e.target.parentElement.children[1].innerHTML
  // 점수 -
  document.querySelector('#std_score').value=e.target.parentElement.children[2].innerHTML
}

console.log(document.querySelectorAll('button'));


// document.querySelector('#addBtn') // 화면 요소.
// .addEventListener('click',
//   function(){alert('addBtn이 클릭됨.')}
// );
// document.querySelector('.addBtn') // 화면 요소.
// .addEventListener('click',
//   function(){alert('addBtn이 클릭됨.')}
// );