// given an array of even numbers, return the array only with odd numbers
function filterevenNumbers(arr) {
  var result = [];

  for (const num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
}

// using filter
function filterevenNumbers(nums) {
  var result = nums.filter((num) => num % 2 !== 0);

  console.log(result);
}
