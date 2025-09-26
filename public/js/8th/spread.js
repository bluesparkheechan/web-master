// spread.js
//배열도 object임..
const veggie = ['tomato', 'cucumber', 'bean'];
const newVeggie = veggie; //객체의 주소 동일..  >>> 어디에 push 하더라도 배열이 같아짐..
newVeggie.push('peas');
console.log(veggie, newVeggie);
const anotherVeggie = [veggie];
veggie.push("peanut");
console.log(veggie, [anotherVeggie]) //   


//원시데이터타입
let fruit = 'apple';
let newFruit = fruit;
newFruit += ", mango";
console.log(fruit, newFruit);

// 펼침연산자.
function sum(a = 0, b = 0, ...num) {
  let result = a + b;
  for (let n of num) {
    result += n;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, ))


const myFriend = {
  // heap 메모리의 주소 참조.
  name: 'Hong',
  age: 22,

}

const yourFriend = myFriend;

const anFriend = {
  ...myFriend
}
myFriend.name = "Hwang"
console.log(myFriend, anFriend);