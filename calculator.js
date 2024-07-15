const add=document.getElementById('add');
const subtract=document.getElementById('subtract');
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');

function addNumbers(number1, number2){
    return number1 + number2;
}
function subtractNumbers(number1, number2){
    return number1 - number2;
}
function multiplyNumbers(number1, number2){
    return number1 * number2;
}
function divideNumbers(number1, number2){
    return number1/number2;
}
add.addEventListener('click',function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = addNumbers(number1,number2)
    document.getElementById('calculation-result').textContent = result;
})
subtract.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    result = subtractNumbers(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
multiply.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiplyNumbers(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
divide.addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divideNumbers(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})