console.log('Yuo are at  '+ window.location)

// function sayHi(){
// 	return 'Hi,student!'
// }

// document.write(sayHi())

function sayName(name){
	name = prompt('What is your name?')
	return 'Hi ' + name
}

document.write(sayName(name))