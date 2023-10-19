
function test(array) {
  let result = 0;
  let orderNumbers = array.sort(function(a, b) {
    return a - b;
  });

  for (let i = 1; i < orderNumbers.length - 1; i++) {
    result += orderNumbers[i];
  }

  return result;
}

console.log(test([6, 2, 1, 8, 10]));
// console.log(test([2, 4]));