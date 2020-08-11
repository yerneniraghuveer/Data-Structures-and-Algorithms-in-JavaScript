//find minimum value in array

//using sort

const findMinimum = (arr) => {

    arr.sort((a,b) => a - b);

    return arr[0]

}


const findMinimum1 = (arr) => {
    let currentMin = arr[0];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element < currentMin){
            currentMin = element;
        }
    }
    return currentMin;
}