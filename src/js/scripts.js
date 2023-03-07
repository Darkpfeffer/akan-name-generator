let calendar= document.querySelector('#calendar');
let submitButton= document.querySelector('#submit-button');
let appending= document.querySelector('.appending')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let paragraph= document.createElement('p');
    paragraph.classList.add('input-date');
    if (!document.querySelector('.input-date')) {
        appending.appendChild(paragraph);
        let inputDate= document.querySelector('.input-date');
        inputDate.innerText= calendar.value;
    } else {
    }
})