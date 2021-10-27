const earth = {
    id:'earth',
    title:'Earth',
    map: {},
    image: '',
    description: '',
    choices: [{
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }]
};

const fire = {
    id:'fire',
    title:'Fire',
    map: {},
    image: '',
    description: '',
    choices: [{
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }]
};

const air = {
    id:'air',
    title:'Air',
    map: {},
    image: '',
    description: '',
    choices: [{
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }, {
        id:'',
        description:'',
        result:'',
        hp:'',
        gold:''
    }]
};

const water = {
    id:'water',
    title:'Water',
    map: {},
    image: './assets/dione.jpg',
    description: '',
    choices: [{
        id:'river',
        description:'River',
        result: 'A damn was built',
        hp: -5,
        gold: 10
    }, {
        id:'ocean',
        description:'Ocean',
        result: 'A deep sea oil drilling plant malfunctioned, releasing 90,000 gallons of oil into the ocean each day',
        hp: -5,
        gold:-30
    }, {
        id:'rain',
        description:'Rain',
        result: 'Refreshing rain vists regularly',
        hp: 20,
        gold: 20
    }]
};

export const quests = [earth, air, fire, water];