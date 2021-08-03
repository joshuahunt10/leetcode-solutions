/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Constraints:

    1 <= n <= 500
    nums.length == 2n
    1 <= nums[i] <= 10^3

*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let holder = [];
    for(let i = 0; i < (nums.length/2); i++) {
        let num = nums[i];
        let nextNum = nums[i + n];
        holder.push(num);
        holder.push(nextNum);
    }
    return holder;
};

/*
n=3
length = 6
[0, 1, 2, | 3, 4, 5]

[i, i+n, i+1, (i+1)+n, ]

repeat until i = length / 2
*/