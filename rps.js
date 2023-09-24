function rps (p1, p2){

	if (p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock"){
		return `player one won`;

	} else if (p2 === "rock" && p1 === "scissors" || p2 === "paper" && p1 === "rock"){ 
		return `player two won`;

	}else if (p1 === p2){
		return "draw";
	}
}

console.log(rps('rock', 'rock'));
