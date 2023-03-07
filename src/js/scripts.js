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
        appending.firstElementChild.className='';
        appending.firstElementChild.classList.add('input-date')
        let inputDate= document.querySelector('.input-date');

        let dt= new Date(calendar.value);

        let dayName= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday'];
        let i= dt.getDay();

        inputDate.classList.add(dayName[i]);
        inputDate.classList.add(personSex.value);

        appending.firstElementChild.classList.remove('input-date')

        let dayAndSexMap= {
            'Monday_Male': 'Kwasi',
            'Tuesday_Male': 'Kwadwo',
            'Wednesday_Male': 'Kwabena',
            'Thursday_Male': 'Kwaku',
            'Friday_Male': 'Yaw',
            'Saturday_Male': 'Kofi',
            'Sunday_Male': 'Kwame',
            'Monday_Female': 'Akosua',
            'Tuesday_Female': 'Adwoa',
            'Wednesday_Female': 'Abenaa',
            'Thursday_Female': 'Akua',
            'Friday_Female': 'Yaa',
            'Saturday_Female': 'Afua',
            'Sunday_Female': 'Ama'
        };
    }
})