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
        return true;
    }
}

export function scoreQuest(choiceObject, questId, userObject) {
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;
}