console.log('Yuo are at  '+ window.location)

const rock = 0;
const scissors = 1;
const paper = 2;


let player = parseInt(prompt('Your choice:0 - rock, 1 - cissors, 2 - paper'));

let computer = Math.floor(Math.random() * 3);

if(player == computer){
	console.log("No one won!")
} else if (player == 0 && computer == 1){
	console.log("Player won!");
} else if (player == 1 && computer == 2){
	console.log("Player won!");
} else if (player == 2 && computer == 0){
	console.log("Player won!");
} else{
	console.log("Computer won!");
}