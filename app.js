// import functions
import { people } from './data.js';

// console.log('People', people);

// grab DOM elements
const selectEl = document.getElementById('name');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const container = document.querySelector('.profile');

console.log('Elements', selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);
// set event listeners
selectEl.addEventListener('change', (e) => {
    console.log(' user clicked');
})

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
