// return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) 
// i.e **arr** once it has been sorted. The returned value should be a number.
// E.g whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).

const whereIBelong = (arr, num) => {
    var counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(num > arr[i]){ // check the number of smaller values less than given number
           counter++
        }
    }
    return counter;
}


const whereIBelong1 = (arr, num) => {
    let counter = 0;
    arr.sort((a,b) => a - b);
    while(num > arr[counter]){
        counter++
    }
    return counter;
}
