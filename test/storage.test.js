
import { getStorage, setStorage } from '../src/storage-utils.js';

const test = QUnit.test;

test('getStorage should access local storage', (expect) => {
    localStorage.removeItem('TEST');
    const expected = { 
        name: 'classified',
        quest: true,
        this: 'that'
    };
    setStorage('TEST', expected);

    const actual = getStorage('TEST');

    expect.deepEqual(actual, expected);
});

test('setStorage should set or re-set local storage', (expect) => {
    localStorage.removeItem('TEST');
    const expected = { 
        name: 'classified',
        quest: true,
        this: 'that'
    };
    setStorage('TEST', expected);

    const actual = getStorage('TEST');

    expect.deepEqual(actual, expected);
});