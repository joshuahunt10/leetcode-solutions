/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

*/

// My initial solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums[nums.length - 1] < target) {
       return nums.length;
    }
    if(nums[0] > target) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        const canidate = nums[mid];
        const nextValue = nums[mid+1];
        const prevValue = nums[mid-1]
        if(canidate === target) {
            return mid
        } else if(target > canidate && target < nextValue) {
            return mid + 1;
        } else if (target < canidate && target > prevValue){
            return mid;
        } else if(canidate > target) {
            right = mid;
        } else if(canidate < target) {
            left = mid + 1;
        }

    }
};

// More optimized
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        const canidate = nums[mid];

        if(canidate === target) {
            return mid
        // Move the higher side of the checking one up from the mid. Use mid + 1 since we already checked mid.
        } else if(canidate < target) {
            left = mid + 1;
        // Move to the lower side of checking. No need to use mid again so subtract 1 spot down.
        } else {
            // This is the key here
            right = mid - 1;
        }
    }
    // This is less intuitive.
    // If the number is 4 and the array is [1, 3, 5]
    // First time left is 0 and right is 2 so mid is 1. So value checking is 3.
    // 3 does not match target and is less than target so we move left to be 2. Now left is 2 and right is 2, mid is 2. So value checking 5.
    // 5 does not match target is is greater than the target so move right to be 1. Now left is !<= right (2<=1) so exit while.
    // This is where we will insert a number.
    return left
};