export function generateUser(userData) {
    return {
        name: userData.get('name'),
        class: userData.get('class'),
        hp: 12,
        gold: 10,
        completed: {}
    };
}

export function findById(array, id) {
    for (let element of array) {
        if (element.id === id) {
            return element;
        }
    }
}

export function hasCompletedAllQuests(userObject, quests) {
    for (let quest of quests) {
        if (!userObject.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export function scoreQuest(choiceObject, questId, userObject) {
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;
}

export function renderUser(user, element) {
    const name = document.createElement('span');
    name.textContent = `Name: ${user.name}`;
    name.classList.add('useinf');
    const clas = document.createElement('span');
    clas.textContent = `Class: ${user.class}`;
    clas.classList.add('useinf');
    const gold = document.createElement('span');
    gold.textContent = `Gold: ${user.gold}`;
    gold.classList.add('useinf');
    const hp = document.createElement('span');
    hp.textContent = `Health: ${user.hp}`;
    hp.classList.add('useinf');
    element.append(name, clas, gold, hp);
}