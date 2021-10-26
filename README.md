# Alchemy Adventure Plan

## Home Page

* HTML Elements
- [x] Form Element
    - [x] text input -- name
    - [x] radio input -- class selector
    - [x] submit button

* Events
 [x] Form Submit
    - [x] Generate User Object
        - [x] Store in LS
            - [x] Redirect to **Map**

## Map Page

* HTML Elements
- [ ] Character Info
- [x] Links to Quests -- using URLSearchParameters
- [ ] Story info -- state based, dynamically renders above the Map

* Events
- [ ] OnClick -- redirect to quest page when any other quests are selected
    - [ ] Once Quest is Complete, making it not click-on-able
- [ ] On Page Load -- IF(quests: completed)

## Quest Page
* HTML Elements
- [ ] Character Info
- [ ] Title
- [ ] Image
- [ ] Quest story description
- [ ] Form with: 
    - [ ] Radio selectors
    - [ ] Submit Button

* Events
- [ ] On Page Load
    - [ ] access URLSearch Parameters to render content on the page
- [ ] Form Submit -- Made a choice in a quest
    - [ ] Update User Object
    - [ ] Render Results
    - [ ] Provide a link back to Map

## Metadata

### User Object
* name
* class
* hp
* gold
* completed: [
    {earth: true,
    choice: 0},
    {air: true,
    choice: 1}
    {fire: true,
    choice: 2}
    {water: false,
    choice: undefined}
]

### Quest data
* id
* title
* map {top:' %'}
* description
* choices: [{
    id:
    description:
    result:
    hp:
    gold:
},{quest2},{quest3},...]

### Repeat until HP less than zero or all quests completed 

# Functions