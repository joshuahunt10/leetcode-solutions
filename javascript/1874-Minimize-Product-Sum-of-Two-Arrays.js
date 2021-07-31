/*
The product sum of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (0-indexed).

    For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order of the elements in nums1.

Constraints:

    n == nums1.length == nums2.length
    1 <= n <= 105
    1 <= nums1[i], nums2[i] <= 100

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Sort one array from lowest to highest
// sort another array from highest to lowest
// Go through the arrays and multiply and add
var minProductSum = function(nums1, nums2) {
    //sort lowest to highest
    const sorted1 = nums1.sort((a,b) => a-b);
    //sort highest to lowest
    const sorted2 = nums2.sort((a,b) => b-a);

    let sum = 0;
    for(let i = 0; i < nums1.length; i++){
        let num1 = sorted1[i];
        let num2 = sorted2[i];
        sum = (num1 * num2) + sum
    }
    return sum;
};