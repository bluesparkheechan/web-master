function newElement() {
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