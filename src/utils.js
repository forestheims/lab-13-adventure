export function generateUser(userData) {
    return {
        name: userData.get('name'),
        class: userData.get('class'),
        hp: 12,
        gold: 10,
        completed: {
            // earth: false,
            // air: false,
            // fire: false,
            // water: false
        }
    };}

export function findById(array, id) {
    for (let element of array) {
        if (element.id === id) {
            return element;
        }
    }
}