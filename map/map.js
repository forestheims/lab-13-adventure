import { quests } from '../src/quest-metadata.js';
import { getStorage } from '../src/storage-utils.js';

const linkSpace = document.getElementById('map-section');

function renderSpan(quest) {
    const x = document.createElement('span');
    x.textContent = quest.title;
    x.classList.add('csss');
    linkSpace.appendChild(x);
}

function renderLink(quest) {
    const x = document.createElement('a');
    x.href = `../quest?id=${quest.id}`;
    x.textContent = quest.title;
    x.classList.add('cccs');
    linkSpace.appendChild(x);
}

const user = getStorage('USER');
for (let quest of quests) {
    // console.log(user.completed[quest.id]);
    if (user.completed[quest.id]) {
        renderSpan(quest);
    } else {
        renderLink(quest);
    }}
