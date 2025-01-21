function performOperation(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      case '^':
        result = Math.pow(num1, num2);
        break;
      default:
        result = 'Invalid operation.';
    }
  }

  document.getElementById('output').innerText = result;
}
