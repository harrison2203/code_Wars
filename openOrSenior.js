function openOrSenior(data){

	let result = [];

	for (let i = 0; i < data.length; i ++){

		if (data[i][0] >= 55 && data[i][1] > 7){
			result.push("Senior");
		}else{
			result.push("Open");
		}
	}
	return result;
}

console.log (openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));


//The Western Suburbs Croquet Club has two categories of membership, Senior
//and Open. They would like your help with an application form that will 
//tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap
//greater than 7. In this croquet club, handicaps range from -2 to +26;
//the better the player the lower the handicap.