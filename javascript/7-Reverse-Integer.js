/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Constraints:

    -231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let revNum = 0;
    // Must be a string to use split;
    revNum = parseInt((Math.abs(x)).toString().split("").reverse().join(""));
    if(revNum > Math.pow(2,31)-1) {
        return 0
    }
    return x < 0 ? -revNum : revNum;
};

/*
Another way to reverse:

let n = 8765;
let reverseN = 0;

// Mutating n here, probably need a holder tbh
while (n) {
    // First multiply by 10, this gives space to add the next number
    // Then use modulo 10, which gives the remainder after dividing by 10 aka the last number in n
    reverseN = reverseN*10 + (n % 10);
    console.log('while' , reverseN)
    // Chop off the last number in n.
    n = Math.floor(n/10);
    // Go again until n is zero
}
*/