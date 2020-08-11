/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

const twoSum = (nums, target) => {
    let map = {};

    for(let i = 0; i< nums.length; i++){
        if(target-nums[i] in map){
            return [map[target-nums[i]],i];
        } else {
            map[nums[i]] = i;
        }
    }
}

// two pointer technique
// for this to work, array should be in sorted order, ascending to desecnding

const twoSum1 = (arr, target) => {
    let i = 0;
    let j = arr.length - 1; // index of last element 

    while(i < j){
        if(arr[i] + arr[j] == target){
            return true;
        } else if(arr[i] + arr[j] < target){
            // If sum of elements at current 
            // pointers is less, we move towards 
            // higher values by doing i++ 
            i++
        } else {
            // If sum of elements at current 
            // pointers is more, we move towards 
            // lower values by doing j-- 
            j--;
        }
    }
    return false
}

console.log(twoSum1([1,2,4,5,7,85], 90))