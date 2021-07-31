/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Constraints:

    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSum = 0;
    return nums.map(num => {
        runningSum = num + runningSum;
        return runningSum;
    })
};