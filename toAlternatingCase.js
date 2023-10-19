String.prototype.toAlternatingCase = function () {
  
	let result = "";
	let splitString = this.split("");

	for (let i = 0; i <splitString.length; i ++){
		if (splitString[i] ===  splitString[i].toLocaleUpperCase()){
			result += splitString[i].toLowerCase();
		} else {
			result += splitString[i].toUpperCase();
		}
	}
		return	result;
}

console.log("hello world".toAlternatingCase()); // "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // "hello world"