function sumArray(array){

	let orderNumbers = array.sort(function(a, b){return a-b})
													.slice(0, -1)
													.slice(1);
													console.log(orderNumbers)

		return orderNumbers.reduce((a, b) => a + b, 0);
}
console.log(sumArray([ 6, 2, 1, 8, 10 ]));

