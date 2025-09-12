// for2.js
// 조건문 추가.

let sum = 0;
let r = 0;
let sum2 = 0;
let sum3 = 0;
// console.log(parseInt(Math.random()*100)); // 0 <= x < 100
//1~10 까지만 범위.

// for (let i = parseInt(Math.random() * 10); i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`sum2의 값은 ${i} 더  해지는 값${sum2+i}`);
//   }
//   if (i % 3 == 0) {
//     console.log(`sum3의 값은${i} 더해지는 값${sum3+i}`);
//   }
//   sum2 = sum2 + i
//   sum3 = sum3 + i
//   console.log(`2의 배수의 합 ${sum2} 3의 배수의 합 ${sum3}`)
// }

for (let i = 1; i <= 10; i++) {
  r = parseInt(Math.random() * 10)+1;
  if (r % 2 == 0) {
    console.log(`sum2(${sum2})의 값에  r(${r})더  해지는 값${sum2+r}`);
    sum2 = sum2 + r;
  }
  if (r % 3 == 0) {
    console.log(`sum3(${sum3})의 값에  r(${r})더  해지는 값${sum3+r}`);
    sum3 = sum3 + r;
  }
  console.log(`${i}번째에 for문 실행 후,r은${r} 2의 배수의 합 ${sum2} 3의 배수의 합 ${sum3}`)
}

// sum2=0;
// sum3=0;
// 1~ 100 까지의 숫자 중에서 2의 배수 , 3의 배수, => 각각저장
// for (let i=1; i <=100; i++){



//   if(i % 2 == 0){
//     console.log(`sum2의 값은${sum2} i의 값 ${i} 그리고 더해지는 값${sum2+i} `); 
//     // sum2+=i;
//     sum2 = sum2 + i;
//   }
//   if(i % 3 == 0){sum3+=i;

//   }
// }

// console.log(`2의 배수의 합은${sum2}`, `3의 배수의 합은${sum3}`);

// for (let i = 3; i <= 100; i += 3) {
//   sum += i;
//   console.log(`3의 배수의 합은${sum}`);
//   // console.log(`i의 ${i}`);

// }




// sum += 3;  // sum = sum + 1;
// sum ++; // sum = sum + 1;
// 1~10 까지 합 => 합이 30 보다 크면 출력하도록
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
//     console.log();
//   if (sum > 30) {
//     console.log(`현재 i의 값은 ${1}, sum은${sum}`)
//   }
// }


// for (let i = 1; i <=10; i++) {
//   //짝수일 때만 출력
//  if(i % 2 == 0){ 
//  console.log(`현재 i의값은 => ${i}`);
//  }
// } 