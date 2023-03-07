let calendar= document.querySelector('#calendar');
let submitButton= document.querySelector('#submit-button');
let appending= document.querySelector('.appending');
let personSex= document.querySelector('#sex');



submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let paragraph= document.createElement('p');
    if (!appending.firstElementChild) {
        appending.appendChild(paragraph);
        submitButton.click();
        
    } else {
        let firstName= document.querySelector('#first-name').value
        let fristChild= appending.querySelector('p')
        let dt= new Date(calendar.value);
        let dayName= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday'];
        let i= dt.getDay();

        const dayAndSexMap= {
            'Monday_Male': 'Kwadwo',
            'Tuesday_Male': 'Kwabena',
            'Wednesday_Male': 'Kwaku',
            'Thursday_Male': 'Yaw',
            'Friday_Male': 'Kofi',
            'Saturday_Male': 'Kwame',
            'Sunday_Male': 'Kwasi',
            'Monday_Female': 'Adwoa',
            'Tuesday_Female': 'Abenaa',
            'Wednesday_Female': 'Akua',
            'Thursday_Female': 'Yaa',
            'Friday_Female': 'Afua',
            'Saturday_Female': 'Ama',
            'Sunday_Female': 'Akosua'
        };

        let dayAndSex= String(dayName[i])+ '_'+ String(personSex.value);
        let akanSurname= dayAndSexMap[dayAndSex];
        fristChild.innerText= firstName+ ' '+ akanSurname
    }
})