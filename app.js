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

function renderPerson(index) {
    container.classList.add(`${people[index].name}`);
    // for each index, set the text content for our elements
    nameEl.textContent = 'Name: ' + people[index].name;
    ageEl.textContent = 'Age: ' + people[index].age;
    bioEl.textContent = 'Bio: ' + people[index].bio;

    // hobby is a booger - it doesn't matter what you call it
    for (const hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}

// set event listeners
selectEl.addEventListener('change', (e) => {
    hobbiesEl.innerHTML = '';
    container.classList.remove('Eion', 'Juli', 'KB');
    const selected = e.target.value;

    if (selected === 'one') {
        renderPerson(0);
    } else if (selected === 'two') {
        renderPerson(1);
    } else {
        renderPerson(2);
    }
});

// get user input
// use user input to update state
// update DOM to reflect the new state
