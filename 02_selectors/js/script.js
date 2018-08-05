console.log('Yuo are at  '+ window.location)
const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const myId = document.getElementById('myId');

console.log(byTag, byClass, myId)

const allBySelector = document.querySelectorAll('.coolClass');
console.log(allBySelector);
const firstBySelector = document.querySelector('div');
console.log(firstBySelector);

const quest = prompt( " What the Fuck?")

myId.innerHTML = "<h2> Hello </h2>";
firstBySelector.innerHTML = quest;