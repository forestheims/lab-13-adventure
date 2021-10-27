import { quests } from '../src/quest-metadata.js';
import { getStorage } from '../src/storage-utils.js';
import { renderUser } from '../src/utils.js';

const userDiv = document.getElementById('user-info');
const questTitle = document.getElementById('quest-title');
const questImg = document.getElementById('quest-img');
const questStory = document.getElementById('quest-story')


let user = getStorage('USER');
renderUser(user, userDiv);