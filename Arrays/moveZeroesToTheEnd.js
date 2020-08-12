// given an array of non zero numbers and zeroes move all the zeros in the array to the last
//example: input : [1,2,0,4,5,0,8,7,0 --->  output : [1,2,4,5,8,7,0,0,0]


const moveZeroesToEnd = (arr) => {
    let start = 0;
    if(arr.length == 0 || !arr) return 

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element !== 0){
            arr[start] = arr[i];
            start++
        }
    }

    for (let i = start; i < arr.length; i++) {
        arr[start] = 0;
        start++;
    }
    return arr;
}
moveZeroesToEnd([1,2,0,4,5,0,8,7,0]);