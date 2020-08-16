// given an array find the sum of pairs of three whose sum is 0;


function threeSum(nums){
    let result = [];

    if(nums.length < 3) return [];

    if(nums.length === 3){
        let sum = nums.reduce(function(acc, cv) {
            return acc + cv
        }, 0)
        return sum === 0 ? [nums] : []
    }

    nums = nums.sort((a,b) => a - b);
    console.log('nums --->',  nums)

    for(let i = 0; i < nums.length - 2; i++){
        let j = i + 1;
        let k = nums.length - 1

        if( i > 0 && nums[i] === nums[i - 1]) continue;

        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                result.push([nums[i], nums[j], nums[k]]);
                while(nums[k] === nums[k - 1]) k--;
                while(nums[j] === nums[j + 1]) j++;
                k--;
                j++; 
            } else if (sum < 0){
                    j++;
            } else {
                k--;
            }
           
        }
    }
    return result;
}

threeSum([0,5,2,-5,-2, 1, -1])