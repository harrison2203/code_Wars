function countSmileys(array){

    let result = 0;
    let regexNose = /[-~]/;

    for (let i = 0; i < array.length; i ++){

        if (array[i].startsWith(":") || array[i].startsWith(";")){
            if(array[i].match(regexNose)){
                if(array[i].endsWith("D") || array[i].endsWith(")")){
                    result ++;
                }
            } else {
                if (array[i].endsWith("D") || array[i].endsWith(")")){
                    result ++;
                }
            }
        }
    }

    return result;
}

