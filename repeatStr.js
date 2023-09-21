function repeatStr(number, string) {

    let result = "";

    for (let i = 1; i <= number; i ++){
        result += string;
    }

    return result;

  }

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha"));