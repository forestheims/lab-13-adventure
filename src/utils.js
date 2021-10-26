export function generateUser(userData) {
    return {
        name: userData.get('name'),
        class: userData.get('class'),
        hp: 12,
        gold: 10,
        completed: [
            { earth: false,
                choice: 0 },
            { air: false,
                choice: 0 },
            { fire: false,
                choice: 0 },
            { water: false,
                choice: 0 }
        ] };
}

export function findById(array, id) {
    for (let element of array) {
        if (element.id === id) {
            return element;
        }
    }
}