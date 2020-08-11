/*
Given an array, remove all duplicate values from the array
and return an array of only unique values.

*/

const removeDuplicates = (arr) => {
    var uniqueItems = {};

    arr.forEach(element => { 
        if(!uniqueItems[element]){
            uniqueItems[element] = true;
        }      
    });
    return Object.keys(uniqueItems);
}
