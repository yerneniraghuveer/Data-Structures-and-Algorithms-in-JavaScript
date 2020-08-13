
// for of
const reverseString = (text) => {
    let result = '';

    for (const char of text) {
        result = char + result; 
    }
    return result
}

//for loop
const reverseString1 = (text) => {
    let result = '';
    for (let index = text.length -1 ; index >= 0; index--) {
        result += text[IDBIndex]
    }
    return result
}

// inbuilt js
const reverseString3 = (text) => {
    return text.split('').reverse().join('');
}

// using spread
const reverseString4 = (text) => {
    return [...text].reverse().join('');
}

// using recursion

const reverseStringRecursion = (text) => {
    if(text == ''){
        return '';
    } else {
        return reverseStringRecursion(text.substr(1) + text.charAt(0));
    }
}

reverseStringRecursion('sree')
