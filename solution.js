function solution(string) {

    if (string.match(/[A-Z]/)){
        return string.replace(/([a-z])([A-Z])/g, '$1 $2');

    } else {
        return string;
    } 
}

console.log(solution('camelCasing')); // =>  "camel Casing"
console.log(solution("identifier")); //  =>  "identifier"
console.log(solution("")); //  =>  ""
console.log(solution("giveLastSayLife"));