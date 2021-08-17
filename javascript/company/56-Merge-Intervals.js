/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Constraints:

    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length === 0) return [];
    if(intervals.length === 1) return intervals;
    //sort it
    intervals.sort((a,b) => {
        return a[0]-b[0];
    })
    let holder = [intervals[0]]

    // Idea is to keep comparing the max number of the holder to the min of the current so we know if there is overlap. If there is then we increase the max to the max value.
    // Otherwise we push the current array and use that for the next comparison.
    for(let i = 0; i < intervals.length; i++) {
        let compare = holder[holder.length - 1];
        let current = intervals[i]
        if(compare[1] >= current[0]) {
            compare[1] = Math.max(compare[1], current[1])
        } else {
            holder.push(current)
        }
    }
    return holder;
};

/*
sort the arrays based on the zero elements
Then check if the max of first element is >= min of second
True => use max of the second elements to replace the value in the holder
False => push it into the holder
*/