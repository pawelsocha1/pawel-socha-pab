var express = require('express');
var app = express();
 app.get('/', function (req, res) {
  res.send('Hello World');
 
const operator = prompt('Podaj operator: ');
const num1 = parseFloat(prompt('Podaj pierwszy numer: '));
const num2 = parseFloat(prompt('Podaj drugi numer: '));

let wynik;


if (operator == '+') {
    wynik = num1 + num2;
}
else if (operator == '-') {
    wynik = num1 - num2;
}
else if (operator == '*') {
    wynik = num1 * num2;
}
else {
    wynik = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${wynik}`)
  
  
 });
  app.listen(3000);

