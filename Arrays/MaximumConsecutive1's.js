// find maximum consecutive 1's in a binary array 

function maximumConsecutiveOnes(arr){
    let result = 0;
    let counter = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            counter = 0
        } else{
            counter++;
            result = Math.max(result, counter);
        }
    }
    return result;
}

console.log(maximumConsecutiveOnes([1,0,0,1,0,1,1,0,1,1,1,1]))