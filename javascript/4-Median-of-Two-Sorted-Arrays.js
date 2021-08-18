/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const sortMe = nums1.concat(nums2).sort((a,b) => a - b)
    const middle = sortMe.length/2;
    if(sortMe.length % 2 === 0) {
        const max = sortMe[middle];
        const min = sortMe[(middle - 1)];
        return (min + max) / 2;
    } else {
        return sortMe[Math.floor(middle)];
    }
};
// [1, 2, 3]
// [1, 2, 3, 4]

/*
Don't forget arrays are base 0!!
*/