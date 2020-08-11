// merge arrrays

const mergeArrays = (arr1, arr2) => {
    let jointArr = [...arr1, ...arr2];

    jointArr.sort((a,b) => a-b);

    return [...new Set([...jointArr])];

}


// merge arrays and remove duplicates

function mergeArrays(arr1, arr2){
    let jointArr = [...arr1, ...arr2];

    jointArr.sort((a,b) => a-b);

    return [...new Set([...jointArr])];
}