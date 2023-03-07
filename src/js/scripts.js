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
        let dt= new Date(calendar.value);

        let dayName= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let i= dt.getDay();

        
        paragraph.innerText= dayName[i];
    } else {
    }
})