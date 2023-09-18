
function minMax(array){

	const maxNumber = Math.max(...array);
	const minNumber = Math.min (...array);

	return [minNumber, maxNumber];
}

console.log (minMax ([1,2,3,4,5])) // [1,5]
console.log (minMax ([2334454,5])) // [5,2334454]
console.log (minMax ([1])) // [1,1]