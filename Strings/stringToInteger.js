// string to integer
function atoi(str){
    let result = 0;
    let sign = 1;

    for(let i = 0; i < str.length; i++){
        if(str[0] === '-'){
            sign = -1;
        }

        if(!isNaN(str[i])){
            result = 10 * result + (str[i] - '0');
        }
    }

    return result * sign
    
}
  
atoi("-777")

//JS inbuilt
// function stringToInteger(str){
//     return parseInt(str);
// }

//stringToInteger('-756')

// function integerToString(integer){
//     return (integer).toString();
// }

// integerToString(-756);
