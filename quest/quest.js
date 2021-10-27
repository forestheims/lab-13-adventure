import { quests } from '../src/quest-metadata.js';
import { getStorage, setStorage } from '../src/storage-utils.js';
import { findById, renderUser, scoreQuest } from '../src/utils.js';

const userDiv = document.getElementById('user-info');
const mainQuest = document.getElementById('main-quest');
const questTitle = document.getElementById('quest-title');

const params = new URLSearchParams(window.location.search);
const quest = findById(quests, params.get('id'));

let user = getStorage('USER');
renderUser(user, userDiv);

// <!-- <span id="quest-story">

// </span>
// <img id="quest-img" src="" alt="">
// <form id="quest-form">
//     <input type="radio" name="choice" id="choice-one">
//     <input type="radio" name="choice" id="choice-two">
//     <input type="radio" name="choice" id="choice-three">
//     <button>Select Action</button>
// </form>

const questImg = document.createElement('img');
const questStory = document.createElement('span');
const questForm = document.createElement('form');
questForm.classList.add('formy');
const button = document.createElement('button');
button.textContent = `Choose a form of ${quest.title}`;
const choices = quest.choices;

for (let choice of choices) {
    const label = document.createElement('label');
    label.classList.add('label-choice');
    const radio = document.createElement('input');
    const span = document.createElement('span');
    span.textContent = choice.description;
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.id = choice.id;
    radio.value = choice.id;
    label.append(radio, span);
    questForm.append(label);
}

questForm.append(button);
questTitle.textContent = quest.title;
questImg.src = `.${quest.image}`;
questStory.textContent = quest.description;
mainQuest.append(questImg, questStory, questForm);

questForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = getStorage('USER');
    const selectedChoice = document.querySelector('input[type="radio"]:checked');
    const choice = findById(quest.choices, selectedChoice.value);
    scoreQuest(choice, quest.id, user);
    setStorage('USER', user);
    userDiv.innerHTML = '';
    renderUser(user, userDiv);

    let resultDiv = document.getElementById('results');
    let resultP = document.createElement('p');
    resultP.textContent = choice.result;
    let linkM = document.createElement('a');
    linkM.textContent = 'Back to the Map';
    linkM.href = '../map';
    resultDiv.classList.remove('hidden');
    mainQuest.classList.add('hidden');

    resultDiv.append(resultP, linkM);
});