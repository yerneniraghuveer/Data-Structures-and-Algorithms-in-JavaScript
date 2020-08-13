// given an array, find distinct elements

const distinctElements = (arr) => {
    let result = [];
    for (const i of arr) {
        if(result.indexOf(i) == -1){
            result.push(i);
        }
        
    }
    return result
}

distinctElements([1,2,2,3,4,9,9,8,0])