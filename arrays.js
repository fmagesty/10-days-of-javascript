nums = [2,3,6,6,5];

function getSecondLargest(nums) {
    let minMax = nums[0]; let secondMax = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > minMax) {
            secondMax = minMax;
            minMax = nums[i]
        }
        if (nums[i] > secondMax && nums[i] < minMax) {
            secondMax = nums[i];
        }
    }
    return secondMax;
}


console.log(getSecondLargest(nums));