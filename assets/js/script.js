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

// window.onload = function () {
//   var elements = document.getElementsByClassName('value');
//   var screen = document.querySelectorAll(' p')[0];
//   var clear = document.getElementsByClassName('clear')[0];

//   for (var i = 0; i < elements.length; i += 1) {
//     if (elements[i].innerHTML === '=') {
//       elements[i].addEventListener('click', calculate(i));
//     } else {
//       elements[i].addEventListener('click', addtocurrentvalue(i));
//     }
//   }

//   function addtocurrentvalue(i) {
//     return function () {
//       if (elements[i].innerHTML === '÷') {
//         screen.innerHTML += '/ ';
//       } else if (elements[i].innerHTML === 'x') {
//         screen.innerHTML += '*';
//       } else {
//         screen.innerHTML += elements[i].innerHTML;
//       }
//     };
//   }

//   clear.onclick = function () {
//     screen.innerHTML = '';
//   };

//   function calculate(i) {
//     return function () {
//       screen.innerHTML = eval(screen.innerHTML);
//     };
//   }
// };
