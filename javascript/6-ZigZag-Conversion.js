/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


    1 <= s.length <= 1000
    s consists of English letters (lower-case and upper-case), ',' and '.'.
    1 <= numRows <= 1000

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let t = 0;
    let col = numRows - 1;
    let strings = [];
    for(let i = 0; i < s.length; i++) {
        let currLetter = s[i]
        if(strings.length < numRows) {
            strings.push([currLetter]);
            continue;
        }
        if(col === 1) {
            // Add a letter to each of the nested arrays
            strings[t].push(currLetter)
            t++;
            if(t >= strings.length) {
                col = numRows - 1;
                t = 0;
            }
            continue;
        }
        if(col > 1){
            strings[(col - 1)].push(currLetter);
            --col;
            continue;
        }
        for(let j = 0; j < strings.length; j++){
            let subArr = strings[j];
            subArr.push(currLetter)
        }
        iter = numRows - 1;
    }

    return strings.flat().join("")
};

/*
one letter on each line,
then 1 letter on each line up to 1
at 1 then each letter on a line

Make a nested Array
Make an array up to num of rows
*/