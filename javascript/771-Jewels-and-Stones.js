/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    //     let matches = 0;
    //     for(let i=0; i < stones.length; i++) {
    //         let stone = stones[i];
    //         for(let j = 0; j < jewels.length; j++) {
    //             let jewel = jewels[j];

    //             if(stone === jewel) {
    //                 matches = matches + 1;
    //                 break;
    //             }
    //         }
    //     }
    //     return matches;

        let matches = 0
        const jewelSet = new Set();
        for(let i = 0; i < jewels.length; i ++) {
            jewelSet.add(jewels[i]);
        }

        for(let i = 0; i < stones.length; i++) {
            let stone = stones[i];
            if(jewelSet.has(stone)) {
                matches++;
            }
        }
        return matches
    };

    /*
    source of truth is jewels
    Stones is what I have.
    Find the valuable ones.

    Loop through stones and compare to each jewel.

    First improvement is to remove the nested for loop
    1st improvement is to add break since we know the stone is a jewel.

    2nd use a Set
    Set has a method of add() that only adds unique values
    Set has a method of has() that does a boolean check

    */