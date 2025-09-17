//dom.js
//createElement() 요소생성.
// appendChild() 부모-자식관계
// innerText, innerHTML, innerContent

let students = [{
  stdNo: 100,
  stdName: '홍길동',
  stdScore: 80
}, {
  stdNo: 200,
  stdName: '김길동',
  stdScore: 85
}];

document.querySelector('#addBtn')
  .addEventListener('click', function () {
    const newElement = {
      stdNo: document.querySelector('#std_no').value,
      stdName: document.querySelector('#std_name').value,
      stdScore: document.querySelector('#std_score').value,

    }
    let tr = makeTr(newElement);
    document.querySelector('#list tbody').appendChild(tr);

  });


function makeTr(newElement) {
  console.log(newElement);
  let tr = document.createElement('tr');
  for (let prop in newElement) {
    let td = document.createElement('td');
    td.innerHTML = newElement[prop];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.addEventListener('click', function (e) {
    console.log(e);
    e.target.parentElement.parentElement.remove();
  });
  btn.setAttribute('class', 'btn btn-danger');
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

createStdList();

function createStdList() {
  for (let i = 0; i < students.length; i++) {
    let tr = makeTr(students[i]);


    document.querySelector('#list tbody').appendChild(tr);



  }
}