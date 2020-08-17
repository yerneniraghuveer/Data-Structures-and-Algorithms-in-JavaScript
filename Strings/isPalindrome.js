// chack whether a given string is palindrome or not

//check by only half the length of the text
const isPalindrome = (text) => {
    for(let i = 0; i < text.length/2; i++){
        if(text[i] !== text[text.length - 1 - i]){
            return false
        } 
    }
    return true;
}

const isPalindrome1 = (text) => {
    
    return text.split('').reverse().join('') === text;
} 