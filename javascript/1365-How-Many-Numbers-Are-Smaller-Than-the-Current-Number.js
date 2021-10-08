/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Constraints:

    2 <= nums.length <= 500
    0 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = nums.slice().sort((a,b) => a-b);
    return nums.map(num => sortedNums.indexOf(num))
};

/*
Explanation:
Sort the nums array from smallest to largest.
Then the index is how many items are smaller than the current item. For example
[4,7,9] the index of 4 is 0 and 0 are smaller than it.
Now go through the array, in a map since we need an array, and find each item in the sorted array and return it's index.
*/