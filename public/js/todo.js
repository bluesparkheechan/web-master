function calculate() {
  let first = parseInt(document.querySelector('#user1').value);
  console.log(first);
  let last = parseInt(document.querySelector('#user2').value);
  console.log(document.querySelector('#user2').value);
  let opr = document.querySelector('#oper').value;
  let result = 0; // 결과값을 저장.
  console.log(first, last, opr);
  
  if(opr=='+'){
    result=(first+last);
  }
  else if(opr=='-'){
    result=(first-last);
  }
  else if(opr=='*'){
    result=(first*last);
  }
  else if(opr=='/'){
    result=(first/last);
  }
  console.log(document.querySelector('#result').value=result);

}