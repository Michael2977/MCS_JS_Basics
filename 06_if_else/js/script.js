const Image = document.querySelector('.imageBlock');
let answer = prompt("How many old you?");
answer = parseInt(answer);
if(answer<18){
	Image.style.backgroundImage = "url(C:/Users/michael/Desktop/moscow_coding_school/MCS_JS_Basics/image/garanty.png)";
	} else if (answer<=25){
		Image.style.backgroundImage = "url(image/download.jpg)";
	} else {
		Image.style.backgroundImage = "url(image/googlelogo_color_272x92dp.png)";
	}

