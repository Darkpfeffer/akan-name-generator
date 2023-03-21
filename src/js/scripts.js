// Declaring variables
let calendar= document.querySelector('#calendar');
let submitButton= document.querySelector('#submit-button');
let appending= document.querySelector('.appending');
let personSex= document.querySelector('#sex');

// Function of the Akan name generator
submitButton.addEventListener('click', (event) => {
    // prevent default behavior of the submit button
    event.preventDefault();
    // paragraph to add to '.appending' div
    let paragraph= document.createElement('p');
    paragraph.classList.add('appending__content')

    // If the generator has been used for the first time
    if (!appending.firstElementChild) {
        appending.appendChild(paragraph);
        // clicks again to prevent writing the same code multiple times
        submitButton.click();
        
    } else {
        //Declaring variables for the generator
        let firstName= document.querySelector('#first-name').value
        let fristChild= appending.querySelector('p')
        let dt= new Date(calendar.value);
        let dayName= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday'];
        let i= dt.getDay();

        //Declare Akan names depending from the day of birth and sex
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

        //adds the final name to the generated paragraph
        fristChild.innerText= firstName+ ' '+ akanSurname
    }
})