import { generateUser, hasCompletedAllQuests, scoreQuest } from '../src/utils.js';
import { quests } from '../src/quest-metadata.js';

const test = QUnit.test;

test('generateUser should return a user object with data from the form', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 
        name: 'tenor',
        class: 'alchemist',
        hp: 12,
        gold: 10,
        completed: {}
    };
    
    const formData = new FormData();
    formData.set('name', 'tenor');
    formData.set('class', 'alchemist');

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('hasCompletedAllQuests should return true if user has completed all quests', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userObject = {
        completed: { earth: true, fire: true, air: true, water: true }
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hasCompletedAllQuests(userObject, quests);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, true);
});

test('hasCompletedAllQuests should return true if user has completed all quests', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userObject = {
        completed: { fire: true, air: true, water: true }
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hasCompletedAllQuests(userObject, quests);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, false);
});

test('scoreQuest should update userObject data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = { 
        name: 'tenor',
        class: 'alchemist',
        hp: 12,
        gold: 10,
        completed: {}
    };
    const choiceObject = {
        id: 'earth',
        hp: -6,
        gold: -9,
        description: 'Dig Dig Dig',
        result: 'You hit your toe with a pick axe and have to go back into town for bandages and antibiotics.',
    };
    const questId = 'earth';
    
    //Act 
    // Call the function you're testing and set the result to a const
    scoreQuest(choiceObject, questId, user);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(user.hp, 6);
    expect.equal(user.gold, 1);
    expect.equal(user.completed[questId], true);
});