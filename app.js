// import functions and grab DOM elements
import { setStorage } from './src/storage-utils.js';
import { generateUser } from './src/utils.js';

const form = document.getElementById('character');
localStorage.removeItem('USER');

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const user = generateUser(data);
    setStorage('USER', user);
    window.location.replace('./map');
});