function sumTwoSmallestNumbers(numbers){

	let result = [];
	let orderNumbers = numbers.sort(function(a, b){return a-b});

	result.push (orderNumbers[0] + orderNumbers[1])
	let arrayToString = result.join("");
	let toNumber = parseInt(arrayToString)
	return toNumber
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));


function betterSolution(numbers){

	let orderNumbers = numbers.sort(function(a, b){return a-b});
	return orderNumbers[0] + orderNumbers[1]
}