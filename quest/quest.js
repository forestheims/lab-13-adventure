import { quests } from '../src/quest-metadata.js';
import { getStorage, setStorage } from '../src/storage-utils.js';
import { findById, renderUser, scoreQuest } from '../src/utils.js';

const userDiv = document.getElementById('user-info');
const main = document.getElementById('main');
const questTitle = document.getElementById('quest-title');

const params = new URLSearchParams(window.location.search);
const quest = findById(quests, params.get('id'));
console.log(quest);

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
const label1 = document.createElement('label');
const radio
questTitle.textContent = quest.title;
questImg.src = quest.image;
questStory.textContent = quest.description;
main.append(questImg, questStory, questForm);

questForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = getStorage('USER');
    const selectedChoice = document.querySelector('input[type="radio"]:checked');
    scoreQuest(selectedChoice, quest.id, user);
    setStorage('USER', user);
    console.log(user);
});