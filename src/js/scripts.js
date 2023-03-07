let calendar= document.querySelector('#calendar');
let submitButton= document.querySelector('#submit-button');
let appending= document.querySelector('.appending');
let personSex= document.querySelector('#sex');



submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let paragraph= document.createElement('p');
    paragraph.classList.add('input-date');
    if (!document.querySelector('.input-date')) {
        appending.appendChild(paragraph);
        submitButton.click();
        
    } else {
        let inputDate= document.querySelector('.input-date');
        let dt= new Date(calendar.value);

        let dayName= ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let i= dt.getDay();

        inputDate.classList.add(dayName[i]);
        inputDate.classList.add(personSex.value);

        let dayAndSexMap= {

        };
    }
})