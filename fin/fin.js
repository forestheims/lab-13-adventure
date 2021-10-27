import { getStorage } from '../src/storage-utils.js';
import { renderUser } from '../src/utils.js';

const userDiv = document.getElementById('user-info');
const resultDisplay = document.getElementById('result-display');

let user = getStorage('USER');
renderUser(user, userDiv);
let results = document.createElement('p');
let linkAgain = document.createElement('a');
linkAgain.textContent = 'Start Over';
linkAgain.href = '../';

if (user.hp > 0) {
    results.textContent = 'You survived, and live another day to contemplate this existence.';
    if (user.gold < 0) {
        results.textContent = 'You survived, and live another day to contemplate this existence. Though, you are in debt. You have used up your resources and then some. What next?..';
    }
} else {
    results.textContent = 'You did not make it through this app with enough health points. Try again next time.';
}

resultDisplay.append(results, linkAgain);