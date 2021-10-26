// import functions and grab DOM elements
import { getStorage, setStorage } from './src/storage-utils.js';
let character = document.getElementById('charcter');
let button = document.getElementById('button');

// initialize global state
function generateUser(userData) {
    let x = {
        name: userData.get('name'),
        class: userData.get('char'),
        hp: 12,
        gold: 10,
        completed: [
            { earth: true,
                choice: 1 },
            { air: true,
                choice: 2 },
            { fire: true,
                choice: 3 },
            { water: false,
                choice: 0 }
        ] };
    return x;
}




// set event listeners
button.addEventListener('click', () => {
    // let data = new FormData(character);
    // let user = generateUser(data);
    // setStorage('USER', user);
    window.location.href = './map';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
