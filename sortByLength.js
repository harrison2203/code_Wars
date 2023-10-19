function sortByLength(array) {
	let result = [...array]; // Créer une copie du tableau pour éviter de modifier l'original
	result.sort(function(a, b) {
			return a.length - b.length;
	});
	return result;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));