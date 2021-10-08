/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Constraints:

    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const buttons = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    //Edgecases
    if(digits.length === 0) return [];
    if(digits.length === 1) {
        return buttons[digits]
    }

    digits = digits.split("")
    // initiate the holder array with the first element
    let holder = buttons[digits[0]];

    //Start at 1 since we are initiating holder with the first element.
    //Loops through all the digits
    for(let num = 1; num < digits.length; num++) {
        //Start with a temp array. Don't want to have to deal with the single letters
        let temp = []
        //Lookup the array of letters for a specific number
        let numArrToAdd = buttons[digits[num]];
        for(let j = 0; j < numArrToAdd.length; j++) {
            let letter = numArrToAdd[j];
            // Go through the items in the holder
            for(let k = 0; k < holder.length; k++) {
                let holderStr = holder[k];
                // combine them
                temp.push(holderStr + letter)
            }
        }
        // replace the holder with the temp so we don't have the single letter initializers to start with.
        holder = temp;
    }
    return holder;

};


/*
Need to make a hardcoded "dictionary" of the numbers to letters
Then it should be a for loop

This doesn't work for three numbers lol.
234

holder [a, b, c]
[d, e, f]
i0j0
i1j1
i2j2
i1j0
...
holder = [ad, ae, ac, bd, be, ...]
i = 2


*/
