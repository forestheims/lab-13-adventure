import { quests } from '../src/quest-metadata.js';
import { getStorage } from '../src/storage-utils.js';
import { hasCompletedAllQuests, renderUser } from '../src/utils.js';

const linkSpace = document.getElementById('map-section');
const user = getStorage('USER');
const userDiv = document.getElementById('user-info');
const mapStory = document.getElementById('map-story');

function renderSpan(quest) {
    const x = document.createElement('span');
    x.textContent = quest.title;
    x.classList.add('csss');
    linkSpace.appendChild(x);
}

function renderLink(quest) {
    const x = document.createElement('a');
    x.href = `../quest/?id=${quest.id}`;
    x.textContent = quest.title;
    x.classList.add('cccs');
    linkSpace.appendChild(x);
}

renderUser(user, userDiv);

if (user.hp <= 0 || hasCompletedAllQuests(user, quests)) {
    window.location.replace('../fin');
} else {
    mapStory.textContent = 'WIND ROCK RAIN INFERNAL';
}

for (let quest of quests) {
    // console.log(user.completed[quest.id]);
    if (user.completed[quest.id]) {
        renderSpan(quest);
    } else {
        renderLink(quest);
    }}
