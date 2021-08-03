/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        for(var j = i + 1; j < nums.length; j++) {
            let compare = nums[j];
            if(num === compare) {
                goodPairs = goodPairs + 1;
            }
        }
    }
    return goodPairs;
};