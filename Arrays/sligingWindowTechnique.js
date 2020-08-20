// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum of ‘k’ 
// consecutive elements in the array.

// Input  : [100, 200, 300, 400]
// k = 2
// Output : 700 (300 + 400)
const findMaximumWindowSum = (arr, k) => {
    let n = arr.length;

    if(n < k){
        console.log('invalid');
        return -1
    }

    let maximumSum = 0;
    // get the sum of the k elements
    for(let i = 0; i < k; i++){
        maximumSum += arr[i]
    }

    let windowSum = maximumSum;
    // move to next window by adding the next element to the current window and subtracting the first element in the previous window
    for(let i = k; i < n; i++){
        windowSum += arr[i] - arr[i - k];
        maximumSum = Math.max(maximumSum, windowSum)
    }

    return maximumSum
}

findMaximumWindowSum1([100,200,300,400],2);


