function basicOp(operation, value1, value2){
  
    let result = 0;

    if (operation === '+'){
        result = value1 + value2;

    } else if (operation === '-'){
        result = value1 - value2;

    } else if (operation === '*'){
        result = value1 * value2;

    } else {
        result = value1 / value2;
    }

    return result;

}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

// Your task is to create a function that does four basic mathematical operations.