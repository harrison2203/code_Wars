function getAge(inputString){

	let result = 0;
	let splitString = inputString.split(" ");

	for(let i = 0; i < splitString.length; i ++){
		result =  splitString[0]
		result = parseInt(result);
	}
	return result;
}

console.log(getAge("2 years old"));
console.log(getAge("9 years old"));

//Write a program that returns the girl's age (0-9) as an integer.

