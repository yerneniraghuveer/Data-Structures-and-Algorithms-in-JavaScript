//Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g. 
//chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

//splice
const chunkArray = (arr, size) =>{
    let arrayCopy = [...arr];
    let result = [];
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0,size));
    }
    return result;
}

// slice

const chunkArray2 = (arr, size) => {

    let result = [];

    for(let i = 0; i < arr.length; i += size){
        console.log('i', i, 'i + size', i + size)
        let chunk = arr.slice(i, i + size); // 0, 5 // 5, 10 // 10, 15
        result.push(chunk)
    }
    return result;
}