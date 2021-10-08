var merge = function(nums1, m, nums2, n) {
    if(n === 0) {
        return;
    }
    if(m === 0) {
        nums1[0] = nums2[0];
    }



    // let copyNums1 = nums1.splice(0, nums1.length);
    // nums1.length = 0;
    // let nums1Pos = 0;
    // let nums2Pos = 0;
    // while(nums1.length < m + n) {
    //     let nums1Num = copyNums1[nums1Pos];
    //     let nums2Num = nums2[nums2Pos];
    //     //Special cases - early escapes
    //     //nums1 pos is too high
    //     if(nums1Pos >= m) {
    //         nums1.push(nums2Num);
    //         nums2Pos++;
    //         continue;
    //     }
    //     //nums2 pos is too high
    //     if(nums2Pos >= n) {
    //         nums1.push(nums1Num);
    //         nums1Pos++;
    //         continue;
    //     }

    //     //Check which number is smaller and add to holder
    //     if(nums1Num < nums2Num) {
    //         nums1.push(nums1Num);
    //         nums1Pos++
    //     } else if (nums1Num === nums2Num) {
    //         nums1.push(nums2Num);
    //         nums2Pos++;
    //     } else {
    //         nums1.push(nums2Num);
    //         nums2Pos++;
    //     }
    // };
    // return nums1;
};

// Has to modify nums1 to be correct

// Go through nums1 array
// Check if element in nums1 or 2

console.log('OUTPUT', merge([1,2,3,0,0,0], 3, [2,5,6], 3))