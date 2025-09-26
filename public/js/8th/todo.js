function newElement() {
  let txt = document.getElementById("myInput").value;
  let cloned = document.querySelector('#myUL>li').cloneNode(true);
  let spaned = cloned.querySelector("span");
  cloned.classList.remove('checked')
  cloned.innerHTML = txt;
  cloned.appendChild(spaned);
  console.log(cloned);
  document.querySelector('#myUL').appendChild(cloned);



  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  li.textContent = inputValue;
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = '';
  li.onclick = function () {
    if (li.getAttribute('class') == 'checked') {
      li.setAttribute("class", '');
    } else {
      li.setAttribute("class", 'checked');
    }
  }

  // function online(){
  //   li.onclick = function (){

  //   }

  //   }
  // }

  const span = document.createElement("span");
  span.className = 'close';
  span.textContent = "X";
  span.setAttribute("class", "close")
  li.appendChild(span);

  span.onclick = function () {
    const div = this.parentElement;
    div.style.display = 'none';
  }

}
newElement();
addSpan();

function addSpan() {
  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    const span = document.createElement("span");
    span.className = 'close';
    span.textContent = "X";
    span.setAttribute("class", "close")
    item.appendChild(span);

    span.onclick = function () {
      const div = this.parentElement;
      div.style.display = 'none';
    }
  });
}
online();

function online() {
  const li = document.querySelectorAll("li");
  li.forEach((item) => {





    item.onclick = function () {
      const div = this;
      if (item.getAttribute('class') == 'checked') {
        item.setAttribute("class", '');
      } else {
        item.setAttribute("class", 'checked');
      }
    }
  });
}



// document.querySelectorAll("span.close").forEach((item) => {
//   item.addEventListener("click", function (e) {
//     e.stopPropagation();

//     console.log("close click");

//   });
// });

// document.querySelectorAll("#myUL").forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log("list click");

//   });
// });