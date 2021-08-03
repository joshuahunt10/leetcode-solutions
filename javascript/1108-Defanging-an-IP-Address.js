/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Constraints:

    The given address is a valid IPv4 address.

*/

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    // 76ms and 38.8 MB
    // return address.split('.').join('[.]');

    //64ms and 38.5MB
    return address.split("").map(char => char === "." ? "[.]" : char).join("");
};