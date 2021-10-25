# Alchemy Adventure Plan

## Home Page
* HTML Elements
    - [ ] Form Element
        * text input -- name
        * radio input -- class selector
        * submit button
* Events
- [ ] Form Submit
    - [ ] Generate User Object
        - [ ] Store in LS

## Map Page
* HTML Elements
* Events

## Quest Page
* HTML Elements
* Events

## Metadata

### User Object
* name
* class
* hp
* gold
* completed: {
    earth: true,
    air: true,
    fire: true,
    water: false
}

### Quest data
* id
* title
* map {top:' %'}



**On Button CLick**
store user object in local storage 
redirect to map page

## create map page
HTML elements:
-links
  -using query parameters URL = quest?key=value
-image of map
-display character info

events:
links should only be clickable if the quest has not been completed
css

## on page load:
grab data from localStorage and display it

## Quest detail page
HTML elements
-title
-image
-form with multiple choice radio buttons 
-character object display somewhere (name, hp, gold)
-quest object
    id:
    title:
    img:
    description:
    map: coordinates to position the link on top of the map image
    choices: [{ multipleChoice1}, {multipleChoice2}, {id: , description: , result: , hp: , gold: } }] 
        description: what the option displays before you select it
        results: what happens if you select it

## on page load:
grab data from localStorage and display it 
re set updated data into local storage


**events**
 on page load
-replace page content 
form submit - update user object, 
display results of user choice
redirect to map page

if quests completed, redirect to results, 
if else redirect to map