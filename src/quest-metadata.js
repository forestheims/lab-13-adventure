const earth = {
    id:'earth',
    title:'Earth',
    map: {},
    image: './assets/dione.jpg',
    description: 'Round rocks roll rambunctiously, remembering responsibilities, reading records, repeating revolutions',
    choices: [{
        id:'crystal',
        description:'Crystal',
        result:'Curiousty created use cases for the treasures of the Earth',
        hp:20,
        gold:20
    }, {
        id:'cave',
        description:'Cave',
        result:'This was not the kind of cave you were anticipating...',
        hp:-5,
        gold:-5
    }, {
        id:'clay',
        description:'Clay',
        result:'Civilisations are built with walls, water, and work',
        hp:20,
        gold:20
    }]
};

const fire = {
    id:'fire',
    title:'Fire',
    map: {},
    image: './assets/dione.jpg',
    description: 'Frequent filtering of past finished, for free futures. Filming, flipping, frantic, fearless, for the glory',
    choices: [{
        id:'campfire',
        description:'Campfire',
        result:'Warm and comforting',
        hp:5,
        gold:-2
    }, {
        id:'wildfire',
        description:'Wildfire',
        result:'West coast worries, world wind whisps smoke all around',
        hp:-15,
        gold:-40
    }, {
        id:'furnace',
        description:'Furnace',
        result:'Financial futures are fiscally first focus',
        hp:-5,
        gold:20
    }]
};

const air = {
    id:'air',
    title:'Air',
    map: {},
    image: './assets/dione.jpg',
    description: 'Apparently it does not appear, but it is there. We can smell it and feel it, but seeing it requires imagination',
    choices: [{
        id:'wind',
        description:'Wind',
        result:'Generating power and providing fresh air',
        hp:10,
        gold:20
    }, {
        id:'ozone',
        description:'Ozone',
        result:'Protecting life on earth from over-radiation, it has been depleted',
        hp:-9,
        gold:50
    }, {
        id:'aroma',
        description:'Aroma',
        result:'Sweet and Soft',
        hp:20,
        gold:-10
    }]
};

const water = {
    id:'water',
    title:'Water',
    map: {},
    image: './assets/dione.jpg',
    description: 'Water on Mars',
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

export const quests = [fire, air, earth, water];