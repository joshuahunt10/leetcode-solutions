/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    // Eventually the start and end will mix past each other. Then we abort
    while(startIndex <= endIndex) {
        // Check for the half way. Use floor in cases of an array being one element. This is to catch cases of an array being 1 element.
        // startIndex = 0 + endIndex = 1  divide all by 2 = 0.5 floor to 0. Check first and only element.
        let halfIndex = Math.floor((startIndex + endIndex) / 2);
        let numToCheck = nums[halfIndex];

        if(numToCheck === target) {
            return halfIndex;
        }

        // If the number checked is greater than the target, then check first half of the array.
        // We know the half index was not correct so move down one element from it. Thus the - 1.
        if(numToCheck > target) {
            endIndex = halfIndex - 1;
        } else {
            // If the number checked is less than the target we need to check the latter half of the array.
            // We know the halfindex was not correct so move up one element and go from there.
            startIndex = halfIndex + 1;
        }
    }
    // If we didn't return out of the while loop then we didn't find anything. Hit it with the -1.
    return -1;
};

/*
while loop condition? tbd

1. go to middle of array, check if number is equal, greater, or less than the target
2. If greater than then take the second half of the array and do this again
3. If less than than take first half of the array
4. Check the new array with same method until value found
5. If value not found then return -1


odd length
[1, 2, 3, 4, 5] // l=5

even
[1, 2, 3, 4] // l=4
*/