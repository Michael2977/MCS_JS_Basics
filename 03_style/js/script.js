console.log('Yuo are at  '+ window.location)

const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

var link = prompt('Chouse your color')

//Colored.style.backgroundColor = ('blue')
Colored.style['background-color'] = link;