const image = document.querySelector('img');
console.log(image.hasAttribute('alt'));

image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));
console.log(image.getAttribute('src'));
image.setAttribute('src', 'C:/Users/michael/Desktop/moscow_coding_school/MCS_JS_Basics/image/googlelogo_color_272x92dp.png')
console.log(image.getAttribute('src'));