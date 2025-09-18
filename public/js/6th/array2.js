// array2.js
const xhtp = new XMLHttpRequest();
xhtp.open('get', '../5th/data.json');
xhtp.send();

xhtp.onload = function () {
  console.log(JSON.parse(xhtp.responseText));
  console.log(JSON.parse(xhtp.responseText).filter((item) => item.gender == "Female"));
  //filter, map => 여자 사원 => 사번, 이름('firstname'+'lastname'), 급여
  let women = JSON.parse(xhtp.responseText).filter((item) => item.gender == "Female")

  const women1 = women.map((item) => {
    let {
      id,
      first_name,
      last_name,
      salary,

    } = women
    let namae = item.first_name + item.last_name
    return {
      id,
      namae,
      salary,

    }
  })
  console.log(women1)
};