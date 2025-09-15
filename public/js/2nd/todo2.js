function cal(){
  const num3 = parseInt(document.querySelector("#num1").value);
  const num4 = parseInt(document.querySelector("#num2").value);
  let result = 0;
  switch (document.querySelector('#oper').value) {
    case '+':
      result = num3+num4;
      break;
    case '-':
      result = num3-num4;
      break;
    case '*':
      result = num3*num4;
      break;
    case '/':
      result = num3/num4;
      break;  
    
  }
    document.querySelector('#result').value= result;
}
