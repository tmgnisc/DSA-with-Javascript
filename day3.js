//Question 3 - Valid Anagram
//An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase , using all the original letters exactly once


//Input: (s= "anagram"), (t = "nagaram"); output true
//Input: (s = "rat"), (t = "car"); output false


//first approach
const isAnagram = function(s, t){
    s = s.split("").sort().join("")
    t=t.split("").sort().join("")
    return s === t
}

//second solution/**
//  * Determines if two strings are anagrams of each other.
//  * An anagram uses all original letters exactly once.
//  * @param {string} s - First input string
//  * @param {string} t - Second input string
//  * @returns {boolean} - True if anagrams, false otherwise
//  */
const isAnagramV2 = function(s, t) {
    if (typeof s !== 'string' || typeof t !== 'string' || s.length !== t.length) {
        return false;
    }

    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        charMap[s[i]] = (charMap[s[i]] || 0) + 1;
        charMap[t[i]] = (charMap[t[i]] || 0) - 1;
    }

    return Object.values(charMap).every(count => count === 0);
};

// Example usage:
console.log(isAnagramV2("anagram", "nagaram")); // true
console.log(isAnagramV2("rat", "car")); // false
console.log(isAnagramV2("", "")); // true
console.log(isAnagramV2("a", "ab")); // false