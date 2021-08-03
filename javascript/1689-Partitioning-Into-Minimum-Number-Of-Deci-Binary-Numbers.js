/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

Constraints:

    1 <= n.length <= 105
    n consists of only digits.
    n does not contain any leading zeros and represents a positive integer.
*/

/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {
    return Math.max(...Array.from(n))
};

/*
Need the highest number in the string
That is how many times have to add 1 to get it.

So, find max that is the number of of numbers needed.

Array.from() will give array same as .split("")
*/