//for.js
//반복문.

// let sum = 0;

// // sum = sum + 1; // sum(1) = sum(0) + 1;
// // sum = sum + 2; // sum(2) = sum(1) + 2;
// // sum = sum + 3; //6
// // sum = sum + 4; //10
// // //......
// // sum = sum + 1000;

// let sum = 0;

// // f(x)=f(x-1)+x;

// for(let i = 1; i <= 10; i = i + 1){  //for문
//   // console.log('sum:'+sum+',i:'+i);
//   console.log(`sum:${sum}, i${i}=> sum:${sum + i}`);
//   sum = sum + i;}


// let cal = 1;
// for (let i=1; i<=9; i=i+1){
//   console.log(`3*${i}=${3*i}`);
// }

//<table>
//<thead><tr><th>asdf</th></tr></thead>
//<tbody><tr><td>asdfasdf</td></tr></tbody>
//</table>

document.write(
  `<table class="table table-success table-striped-columns">`);
document.writeln(
  `<thead>
     <tr class="table-active">
      <th>단수</th>
      <th>x</td>
      <th>배수</th>
      <th>=</td>
      <th>결과</th>
    </tr>
   </thead>`);
   
for (let i = 1; i <= 9; i = i + 1) {
  document.writeln(`<tr>
                      <td>3</td>
                      <td>x</td>
                      <td>${i}</td>
                      <td> = </td>
                      <td>${3*i}</td>
                    </tr>`);

}
document.write(
  '</tbody></table>'
);