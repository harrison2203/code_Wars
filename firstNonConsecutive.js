function firstNonConsecutive(array){

	for (let i = 1; i < array.length; i ++){
		if (array[i] !== array[i - 1] + 1){
			return array[i];
		} 
	}
	return null;
}

console.log(firstNonConsecutive([1,2,3,4,5,6,8])); // 8
console.log(firstNonConsecutive([1,2,3,4,6,7,8])); //  6
console.log(firstNonConsecutive([1,2,3,4])); //  null

