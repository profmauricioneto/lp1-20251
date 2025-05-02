'use strict';
// let header = document.getElementById('header-page');
// console.log(header);

// header.style.color = 'red';
// header.style.textAlign = 'center';

// function changeTitle(newTitle) {
//     header.innerHTML = `<h1>${newTitle}</h1>`;
// }


let buttons = document.getElementsByClassName('btn-like');
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
            buttons[i].classList.toggle('liked');
    })
}
