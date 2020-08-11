// range sum [1,9] // 1+2+3.....+9 //45

const rangeSum = (arr) => {
    var sum = 0;

    for(let i = arr[0]; i <= arr[1]; i++){
        sum += i;
    }
    return sum;
}

