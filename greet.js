function greet(language){

const database = [["english", "Welcome"]
, ["czech", "Vitejte"]
, ["danish", "Velkomst"]
, ["dutch", "Welkom"]
, ["estonian", "Tere tulemast"]
, ["finnish", "Tervetuloa"]
, ["flemish", "Welgekomen"]
, ["french", "Bienvenue"]
, ["german", "Willkommen"]
, ["irish", "Failte"]
, ["italian", "Benvenuto"]
, ["latvian", "Gaidits"]
, ["lithuanian", "Laukiamas"]
, ["polish", "Witamy"]
, ["spanish", "Bienvenido"]
, ["swedish", "Valkommen"]
, ["welsh", "Croeso"]];

for (let i = 0; i < database.length; i ++){
		if (database[i][0] === language){
			return database[i][1]
		}
	}
	return database[0][1]
}

console.log (greet('polish'));
