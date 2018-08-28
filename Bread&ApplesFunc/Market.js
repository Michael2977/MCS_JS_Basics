

var allMoney = prompt('How much money do you have?')
var apples = prompt ('How many apples have you bought?')
var breads = prompt('How many breads have you bought?')
var oneApple = prompt('How much is one apple?')
var oneBread = prompt('How much is one bread?')





let haveEnough = function(money,apple,bread,oneAp,oneBr) {
var sumApples = parseInt(apple) * parseInt(oneAp)
var sumBreads = parseInt(oneBr) * parseInt(bread)
var fullExpenses = sumApples + sumBreads

	if(fullExpenses<= money){
		document.write('You have enough money!')
	}

	else return document.write('You have not enough money')
}

 haveEnough(allMoney,apples,breads,oneApple,oneBread)
