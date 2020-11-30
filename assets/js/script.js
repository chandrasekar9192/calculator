// for (var i = 0; i < keys.length; i++) {
//   keys[i].onclick = function (e) {
//     var input = document.querySelector('.input');
//     var inputVal = input.innerHTML;
//     var btnVal = this.getAttribute('value');
//     console.log(input);
//   };
// }

// function btn() {
//   var x = document.getElementById('value').innerText;
//   document.getElementById('input').innerHTML = x;
// }

//

'use strict';
window.onload = function () {
  document
    .getElementById('enter_button')
    .addEventListener('click', calculateAnswer);
  let firstNumber = 0;
  let operatorDropDown = '';
  let secondNumber = 0;
  let finalAnswer = 0;

  function calculateAnswer() {
    firstNumber = Number(document.getElementById('first_number').value);
    secondNumber = Number(document.getElementById('second_number').value);
    operatorDropDown = document.getElementById('operator').value;
    if (!isNaN(!firstNumber) && !isNaN(!secondNumber)) {
      switch (operatorDropDown) {
        case '+':
          finalAnswer = firstNumber + secondNumber;
          break;

        case '×':
          finalAnswer = firstNumber * secondNumber;
          break;

        case '-':
          finalAnswer = firstNumber - secondNumber;
          break;

        case '÷':
          finalAnswer = firstNumber / secondNumber;
          break;
      }
      document.getElementById('answer').innerHTML = finalAnswer;
    } else {
    }
  }
};
