console.log('JS OK');

var numberList = '';
var numbersElement = document.getElementById('numbers');

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        numberList += '<li class="fizzbuzz">FizzBuzz</li>';
    } else if (i % 3 == 0) {
        console.log('Fizz');
        numberList += '<li class="fizz">Fizz</li>';
    } else if (i % 5 == 0) {
        console.log('Buzz');
        numberList += '<li class="buzz">Buzz</li>';
    } else {
        console.log(i.toString());
        numberList += '<li>' + i.toString() + '</li>';
    }
}

console.log(numberList);
numbersElement.innerHTML = numberList;