function productofArrayExcepSelf(nums){
    let l = [];
    let r = [];
    let answer = [];

    l[0] = 1;

    for(let i = 1 ; i < nums.length; i++){
        l[i] = l[i - 1] * nums[i - 1];
    }
    r[nums.length -1] = 1;

    for(i = nums.length - 2; i >=0; i--){
        r[i] = r[i + 1] * nums[i + 1];
    }

    for(let i = 0; i < nums.length; i++){
        answer[i] = l[i] * r[i];
    }

    return answer
}

productofArrayExcepSelf([1,2,3,4,5])