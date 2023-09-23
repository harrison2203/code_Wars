function twoSum(numbers, target){
    
	let result = [];

	for (let i = 0; i < numbers.length; i ++){ // ici i va boucler jusqu'à 3 (numbers)
			for (let j = i + 1; j < numbers.length; j ++){ // ici j va boucler de j(1) jusqu'à 3
					if (numbers[i] + numbers[j] === target){
							result.push(i, j);
						}
					}
				}
				return result;
}

console.log(twoSum([1, 2, 3], 4));
//console.log(twoSum([2, 3, 1], 3));

