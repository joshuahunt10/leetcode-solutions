/*
Given two sparse vectors, compute their dot product.

Implement class SparseVector:

    SparseVector(nums) Initializes the object with the vector nums
    dotProduct(vec) Compute the dot product between the instance of SparseVector and vec

A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.

Follow up: What if only one of the vectors is sparse?

Constraints:

    n == nums1.length == nums2.length
    1 <= n <= 10^5
    0 <= nums1[i], nums2[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 var SparseVector = function(nums) {
    this.nums = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let dotProduct = 0;
    for(let i = 0; i < this.nums.length; i++) {
        let myNum = this.nums[i];
        let vecNum = vec.nums[i];
        dotProduct = (myNum * vecNum) + dotProduct;
    }
    return dotProduct;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);