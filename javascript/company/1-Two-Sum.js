/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j];
            if(firstNum + secondNum === target) {
                return [i, j];
            }
        }
    }
};

/*
for letters
We can do this type of loop that iterates through.
Each string will then be checked to be includes in the wordDict
Add that string to a holder dictionary
Value of i = j -1 and break (cause the outerloop will increment i++ and we want it to be at the spot the last word was found)
continue on the loop to find all the words.
Compare the lengths of the holderDict and wordDict
    if holderDict.length < wordDict return false
*/