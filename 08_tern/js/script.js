const Image = document.querySelector('.imageBlock');
let answer = prompt("How many old you?");
answer = parseInt(answer);

(answer>=18)? Image.style.backgroundImage = 'url(image/garanty.png)' : Image.style.backgroundImage = 'url(image/download.jpg)' 