// find the second maximum element in an array

const findSecondMaximum = (arr) => {
    let max = 0;
    let secondMax = 0;

    for(let value of arr){
        if(value > max){
            max = value
        }
    }

    for(let value of arr){
        if((item < max) && (item > secondMax)){
            secondMax = value;
        }
    }

    return secondMax;
}
console.log(findSecondMinimun([9,2,3,6,7]))

function findSecondMinimun1(arr){
    let max = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    for(let val of arr){
        if(val > max){
            secondMax = max;
            max = val;
        } else if(val > secondMax && val !=max){
            secondMax = val
        }
    }
    return secondMax;
}

console.log(findSecondMinimun1([9,2,3,6,7]))