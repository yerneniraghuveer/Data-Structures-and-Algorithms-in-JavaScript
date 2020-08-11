/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

function falsyBouncer(arr){

    let result = '';

    for(let value of arr){
        if(value){
            result.push(value);
        }
    }
    return result;
}
