function updateLight(current) {
  
	let result = "";

	if(current === "red"){
			result = "green";

	} else if( current === "green"){
			result = "yellow";

	} else {
			result = "red";

	}

	 return result;

}

console.log ("the result is", updateLight("green")); // yellow
console.log ("the result is", updateLight("yellow")); // red
console.log ("the result is", updateLight("red")); // green



function updateLight(current) {

	return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}


const updateLight = current => ({
	green: 'yellow',
	yellow: 'red',
	red: 'green',
})[current]