/*
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Constraints:

    1 <= s.length <= 1000
    s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
    const letterArr = s.split('');
    let cleanArr = [];
    for(let i = 0; i < letterArr.length; i++) {
        let letter = letterArr[i];
        if(letter !== 'a'
           && letter !== 'e'
           && letter !== 'i'
           && letter !== 'o'
           && letter !== 'u'
          ) {
            cleanArr.push(letterArr[i])
        }
    }
    return cleanArr.join("");
};