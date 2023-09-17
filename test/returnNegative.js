function makeNegative(number) {

	let result = 0;
	
		if (number > 0) {
			//result = -(number)
			result =(number - number) - number
		} else if (number < 0){
			result = number
		}
	
		return result
	  }
	
	console.log (makeNegative(1));
	console.log (makeNegative(-5));