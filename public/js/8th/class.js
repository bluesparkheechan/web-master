// class.js

const obj = {
  name: 'Hong',
  age: 20,
  showInfo() {
    return `이름은 ${this.name},`;
  }
}; // 객체(하나의 값)

//클래스 (실사물의 전산적 표현 => 객체(클래스))
class Person {
  // 이름, 키, 몸무게, 혈액형
  constructor(name, height, weight, bloodType) { // 생성자
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.bloodType = bloodType;

  }
  showInfo() {
    return `이름은${this.name}, 키는${this.height}`;

  }

}

const p1 = new Person('Hong', 178.9, 72.3, 'AB') // new라는 생성자로 인스턴스 생성
const p2 = new Person('Hwang', 191, 110, 'O')
console.log(p2.name, p2.height, p2.showInfo());
console.log(p1.showInfo());