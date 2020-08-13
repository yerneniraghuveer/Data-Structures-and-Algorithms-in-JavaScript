// string to integer

function stringToInteger(str){
    return parseInt(str);
}

stringToInteger('-756')

function integerToString(integer){
    return (integer).toString();
}

integerToString(-756);

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc , '')
    
}
function integerReversal(num){

    let reverseNumber = parseInt(reverseString(num.toString()));

    return reverseNumber * Math.sign(num)
}

integerReversal(-876)
