/*
Given a string s, find the length of the longest substring without repeating characters.

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

/*
LESS OPTIMIZED
*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;

    let holderStr = "";
    let longest = 0;

    for(let i=0; i < s.length; i++) {
        if(longest < holderStr.length) {
            longest = holderStr.length
        }
        let start = s[i];
        holderStr = start;
        for(let j = i + 1; j < s.length; j++) {
            let end = s[j];
            if(holderStr.includes(end)) {
                break;
            } else {
                holderStr = holderStr + end
                continue;
            }
        }
    }
    return longest;
};


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let holderStr = "";
    let longest = 0;

    for(let i = 0; i < s.length; i++) {
        let letter = s[i];

        if(holderStr.includes(letter)) {
            // Remove all the letters up to and including the duplicate, then add it to the end.
            holderStr = holderStr.slice(holderStr.indexOf(letter) + 1) + letter
        } else {
            holderStr = holderStr + letter;
        }
        if(longest < holderStr.length) {
            longest = holderStr.length
        }
    }
    return longest
};

/*
use for loop
Add item to holder
Check that next item does not exist in holder
if not add it
if it does then take length and add to holder variable
once at the end, return the holder variable

Problem "dvdf"
Need to go back to the last unique letter

"abfghiklfm"

If it contains a duplicate letter,
"dvdf"
d
dv
dvd <- slice off the duplicate letter
    indexOf(d) = 0;
    slice
*/