

const myClass = document.querySelector('.shortBio');
console.log(myClass.className)
myClass.className += ' animated';

const body = document.body
const bgr = prompt('What color page do you prefer? ')
body.style.backgroundColor = bgr;

const font = document.querySelector(' .page');
const fontcolor = prompt('What font color do you prefer?');
font.style.color = fontcolor;


const name = document.querySelector('span')
const myName = prompt('What is your inspire name?')
name.innerHTML = myName;


const image = document.querySelector('img');
const link = prompt('Set your link!')
image.setAttribute('src', link);

const text = document.querySelector('p');
const myText = prompt( "Set your text!");
text.innerHTML += myText;