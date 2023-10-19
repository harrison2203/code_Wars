function getSum(a, b){
   
		let sum = 0;

		if (a === b){
				return a;
		} else if (a < b){
				for (let i = a; i <= b; i ++){
						sum += i;
				}
		}else if (a > b){
				for (let i = b; i <= a; i ++){
						sum += i;
				}
		}
		return sum;
}

console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(5, -1));
console.log(getSum(-1, 2));
console.log(getSum(2, 7));
console.log (getSum(10, 4));