//move all negative integers to the beginning

// input [-1, 2, -3, 4, 5, 6, -7, 8, 9]
//output [-1, -3, -7, 2, 4, 5, 6, 8, 9]

function moveNegativeNumbers(arr) {
  let j = 0;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}

console.log(moveNegativeNumbers([-1, 2, -3, 4, 5, 6, -7, 8, 9]));


function moveNegativeNumbers1(arr) {
    let pos = [];
    let neg = [];
// use of auxilary arrays

    for(let value of arr){
        if(value < 0){
            neg.push(value);
        } else {
            pos.push(value)
        }
    }
    return [...neg, ...pos]
    
}
console.log(moveNegativeNumbers1([-1, 2, -3, 4, 5, 6, -7, 8, 9]));
