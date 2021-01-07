// Name
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const nameField = document.getElementById('white-field');

//Pronouns
const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounField = document.getElementById('pronoun-field');

//colors
const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const yellowButton = document.getElementById('yellow-button');
const body = document.getElementById('body');

//fonts
const fontList = document.getElementById('font-list');




// add name
nameButton.addEventListener('click', () => {
    nameField.textContent = nameInput.value;
})

//add pronouns
pronounButton.addEventListener('click', () => {
    pronounField.textContent = pronounInput.value
})

//change background
pinkButton.addEventListener('click', () => {
    console.log('pink');
    body.style.backgroundColor = 'pink';
})

blueButton.addEventListener('click', () => {
    console.log('pink');
    body.style.backgroundColor = 'blue';
})

yellowButton.addEventListener('click', () => {
    console.log('pink');
    body.style.backgroundColor = 'yellow';
})


// Placeholder font names   

// Change font
fontList.addEventListener('change', (e) => {
    nameField.style.fontFamily = "Roboto";
})

fontList.addEventListener('change', (e) => {
    console.log(e.target.value);
    nameField.style.fontFamily = "Hanalei Fill";
})

