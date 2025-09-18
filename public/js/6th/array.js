// array.js

const name = ['김라니', '박라니', '고라니', '고나리', '고사리'];

// filter() => true 값에 해당하는 요소들을 새로운 배열에 저장.
const result = name.filter((item) => item.indexOf('고') == 0);
console.log(result);

const numbers = [23, 44, 22, 57, 80, 19];
const evenNumbers = numbers.filter((item) => {
  return item % 2 == 0;

  // console.log(item)
});
console.log(evenNumbers);

// map() => 모양을 약간 바꿈 ex) A > A' 매핑. 찾아바꾸기 같은  느낌이네..
const animals = [{
    no: 1,
    name: "기린",
    score: 50
  },
  {
    no: 2,
    name: "사자",
    score: 55
  },
  {
    no: 3,
    name: "김현태",
    score: 70
  },
  {
    no: 4,
    name: "오징어",
    score: 99
  },
];
const pass = animals.map((item) => {
    let {
      no,
      name
    } = item;
    let isPass = item.score >= 71 ? "pass" : "failed";
    return {
      no,
      name,
      isPass
    };
  })
  .filter((item) => item.isPass == "pass")
pass.forEach(item => {
  if (item.isPass == 'pass') {
    console.log(item);
  }
})