export function getStorage(key) {
    let x = localStorage.getItem(key);
    return JSON.parse(x);
}

export function setStorage(key, obj) {
    let x = JSON.stringify(obj);
    localStorage.setItem(key, x);
}