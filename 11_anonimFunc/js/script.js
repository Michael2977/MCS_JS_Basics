console.log('Yuo are at  '+ window.location)

// let myFun = function(element, color){
// 	element.style.backgroundColor = color;
// }
// 	const heading = document.querySelector('h1')

// 	myFun(heading, 'green')

let myText = (element, text)=> element.innerHTML = text
myText(document.body, 'Hello!')
